import { useState } from 'react';
import './styles/App.css';
import { BookData } from './interface/BookData';
import Cart from './components/Cart';
import ProductList from './components/ProductList';
import Header from './components/Header';

function App() {
  const [cartItems, setCartItems] = useState<BookData[]>([]);

  //Functional Requirements 1: Allow the user to add products in the cart;
  const addToCart = (book: BookData) => {
    setCartItems([...cartItems, book]);
  };

  return (
    <div className='body-container'>
      <Header />
      <div className='body-content'>
      <div className="container-plist">
        <ProductList addToCart={addToCart} />
      </div>
      <div className='container-cart'>
        <Cart cartItems={cartItems} setCartItems={setCartItems} />
      </div>
      </div>
    </div>
  );
}

export default App;