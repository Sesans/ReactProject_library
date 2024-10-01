import { BookData } from "../interface/BookData";
import '../styles/Cart.css'

function priceFormat(value: number) {
    return `R$ ${value.toFixed(2)}`;
}

function Cart({ cartItems, removeFromCart }: { cartItems: BookData[], removeFromCart: (index: number) => void }) {
    const total = cartItems.reduce((acc: number, item: BookData) => acc + item.value, 0);
  
    return (
      <div className="shopping-menu">
        <h2>Shopping Cart</h2>
        <ul>
          {cartItems.map((item: BookData, index: number) => (
            <li key={index}>
              {item.title} - {priceFormat(item.value)}
              <button onClick={() => removeFromCart(index)} className="remove-btn">Remover</button>
            </li>
          ))}
        </ul>
        <h3>Total: {priceFormat(total)}</h3>
      </div>
    );
  }

  export default Cart;