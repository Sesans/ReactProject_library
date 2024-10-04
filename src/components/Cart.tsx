import { BookData } from "../interface/BookData";
import '../styles/Cart.css';
import { HiBars3 } from "react-icons/hi2";

function priceFormat(value: number) {
    return `R$ ${value.toFixed(2)}`;
}

function Cart({ cartItems, removeFromCart }: { cartItems: BookData[], removeFromCart: (index: number) => void }) {
  const total = cartItems.reduce((acc: number, item: BookData) => acc + item.value, 0);

  const groupedItems = cartItems.reduce((acc: { [id: number]: BookData[] }, item: BookData) => {
    if (!acc[item.id]) {
      acc[item.id] = [];
    }
    acc[item.id].push(item);
    return acc;
  }, {});

  return (
    <div className="shopping-menu">
      <h2>Shopping Cart</h2>

      <ul className="elements-list">
        {Object.keys(groupedItems).map((id: string) => {
          const itemId = parseInt(id);
          return (
            <li key={id} className="item">
              <div className="item-view">
              {groupedItems[itemId][0].title} x {groupedItems[itemId].length} - {priceFormat(groupedItems[itemId].reduce((acc: number, item: BookData) => acc + item.value, 0))}
              </div>
              <div className="edit-item">
              <button onClick={() => removeFromCart(cartItems.findIndex((item: BookData) => item.id === itemId))} className="remove-btn"><HiBars3 /></button>
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