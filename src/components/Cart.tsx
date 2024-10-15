import '../styles/Cart.css';
import { BookData } from "../interface/BookData";
import { FaTrash } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { useState } from 'react';
import { EditModal } from './Edit-modal';

export function priceFormat(value: number) {
  return `R$ ${value.toFixed(2)}`;
}


//Cart implements all the functionalities about the shopping cart section;
function Cart({ cartItems, setCartItems}: { cartItems: BookData[], setCartItems: (items: BookData[]) => void}) {

  //groudpedItems is responsible for counting the items in the Cart, and the quantity of each item;
  const groupedItems = cartItems.reduce((acc: { [id: number]: BookData[] }, item: BookData) => {
    if (!acc[item.id]) {
      acc[item.id] = [];
    }
    acc[item.id].push(item);
    return acc;
  }, {});


  //In order to update the cart, this functions receives the book ID and the new desired quantity;
  function updateQuantity(itemId: number, newQuantity: number): void {
    const newCartItems = [...cartItems];
    const itemIndex = newCartItems.findIndex((item) => item.id === itemId);
    
    //
    if (itemIndex !== -1) {
      const item = newCartItems[itemIndex];
      const existingQuantity = groupedItems[itemId].length;
      const quantityToRemove = existingQuantity - newQuantity;
  
      for (let i = 0; i < quantityToRemove; i++) {
        const indexToRemove = newCartItems.findIndex((item) => item.id === itemId);
        if (indexToRemove !== -1) {
          newCartItems.splice(indexToRemove, 1);
        }
      }
  
      for (let i = 0; i < newQuantity - existingQuantity; i++) {
        newCartItems.push(item);
      }
    }
  
    setCartItems(newCartItems);
  }

  //Total saves the value of all the items in the cart;
  const total = cartItems.reduce((acc: number, item: BookData) => acc + item.value, 0);

  function removeFromCart(itemId: number, quantity: number): void {
    const newCartItems = [...cartItems];
  
    for (let i = 0; i < quantity; i++) {
      const itemIndex = newCartItems.findIndex((item) => item.id === itemId);
      if (itemIndex !== -1) {
        newCartItems.splice(itemIndex, 1);
      }
    }
    
    setCartItems(newCartItems);
  }

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<BookData | null>(null);

  const handleOpenModal = (product: BookData) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  }

  return (
    <div className="shopping-menu">
      <h2>Shopping Cart</h2>
      <ul className="elements-list">
        {Object.keys(groupedItems).map((id: string) => {
          //Functional Requirements 2: Display each item in the cart;

          const itemId = parseInt(id);
          const itemIndex = cartItems.findIndex((item) => item.id === itemId);

          if (itemIndex === -1) return null;
          return (
            <li key={itemIndex} className="item">
              <div className="item-view">
                {groupedItems[itemId][0].title} x 
                {groupedItems[itemId].length} - 
                {priceFormat(groupedItems[itemId].reduce((acc: number, item: BookData) => acc + item.value, 0))}
              </div>

              <div className="edit-item">
                <button onClick={() => handleOpenModal(groupedItems[itemId][0])}><FaRegEdit /></button>
              </div>

              <div className="remove-item">
                <button className='remove-button' onClick={() => removeFromCart(itemId, 1)}><FaTrash /></button>
              </div>
           </li>
          );
        })}
      </ul>

      <div className="total-price">
        <h3>Total: {priceFormat(total)}</h3>
      </div>
      
      {isModalOpen && selectedProduct && (
        //Functional Requirements 3: Allow the user to edit the quantity of each of the items;
        //This modal will be invoked by clicking on the "Edit" icon next to each of the items;
        <EditModal
        closeModal={() => setIsModalOpen(false)}
        product={selectedProduct}
        quantity={groupedItems[selectedProduct.id].length}
        updateQuantity={updateQuantity}
        />
      )}
    </div>
  );
}
export default Cart;