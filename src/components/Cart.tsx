import '../styles/Cart.css';
import { BookData } from "../interface/BookData";
import { FaTrash } from "react-icons/fa";
import { useState } from 'react';

export function priceFormat(value: number) {
  return `R$ ${value.toFixed(2)}`;
}

function Cart({ cartItems, setCartItems}: { cartItems: BookData[], setCartItems: (items: BookData[]) => void}) {
  const [quantityToRemove , setQuantityToRemove] = useState('1');
  const total = cartItems.reduce((acc: number, item: BookData) => acc + item.value, 0);

  const groupedItems = cartItems.reduce((acc: { [id: number]: BookData[] }, item: BookData) => {
    if (!acc[item.id]) {
      acc[item.id] = [];
    }
    acc[item.id].push(item);
    return acc;
  }, {});

  function removeFromCartMultiple(itemId: number, quantity: number): void {
    const newCartItems = [...cartItems];
  
    for (let i = 0; i < quantity; i++) {
      const itemIndex = newCartItems.findIndex((item) => item.id === itemId);
      if (itemIndex !== -1) {
        newCartItems.splice(itemIndex, 1);
      }
    }
    
    setCartItems(newCartItems);
  }

  return (
    <div className="shopping-menu">
      <h2>Shopping Cart</h2>
      <div className="remove-multi-item">
        <label>Set quantity to remove:</label>
        <input
          className='qnt-remove-input'
          type="number"
          
          min={1}
          max={10}
          value={quantityToRemove}
          onChange={(e) => setQuantityToRemove(e.target.value)}
        />
      </div>
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

              <div className="remove-item">
              <button className='remove-button' onClick={() => removeFromCartMultiple(itemId, parseInt(quantityToRemove))}><FaTrash /></button>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="total-price">
        <h3>Total: {priceFormat(total)}</h3>
      </div>
    </div>
  );
}
export default Cart;