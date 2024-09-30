import { useState } from 'react';
import './styles/App.css';
import { BookData } from './interface/BookData';
import Cart from './components/Cart';
import ProductList from './components/ProductList';
import Header from './components/Header';

function App() {
  const [cartItems, setCartItems] = useState<BookData[]>([]);

  const addToCart = (book: BookData) => {
    setCartItems([...cartItems, book]);
  };

  const removeFromCart = (index: number) => {
    const newCart = cartItems.filter((_, i) => i !== index);
    setCartItems(newCart);
  };


  return (
    <div>
      <Header />
      <div className="container-plist">
        <ProductList addToCart={addToCart} />
      </div>

      <div className='container-cart'>
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />  
      </div>

    </div>
  );
}

export default App;