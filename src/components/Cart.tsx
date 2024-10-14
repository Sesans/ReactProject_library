import '../styles/Cart.css';
import { BookData } from "../interface/BookData";
import { FaTrash } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { useState } from 'react';
import { EditModal } from './Edit-modal';

export function priceFormat(value: number) {
  return `R$ ${value.toFixed(2)}`;
}

function Cart({ cartItems, setCartItems}: { cartItems: BookData[], setCartItems: (items: BookData[]) => void}) {
  function updateQuantity(itemId: number, newQuantity: number): void {
    const newCartItems = [...cartItems];
    const itemIndex = newCartItems.findIndex((item) => item.id === itemId);
  
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

  const total = cartItems.reduce((acc: number, item: BookData) => acc + item.value, 0);
  const groupedItems = cartItems.reduce((acc: { [id: number]: BookData[] }, item: BookData) => {
    if (!acc[item.id]) {
      acc[item.id] = [];
    }
    acc[item.id].push(item);
    return acc;
  }, {});

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
          const itemId = parseInt(id);
          const itemIndex = cartItems.findIndex((item) => item.id === itemId);

          if (itemIndex === -1) return null;
          return (
            <li key={itemIndex} className="item">

              <div className="item-view">
              {groupedItems[itemId][0].title} x {groupedItems[itemId].length} - {priceFormat(groupedItems[itemId].reduce((acc: number, item: BookData) => acc + item.value, 0))}
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