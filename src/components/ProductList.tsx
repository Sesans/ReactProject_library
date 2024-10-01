import { useState } from 'react';
import { Card } from './Card-items';
import { BookData } from '../interface/BookData';
import { useBookData } from '../hooks/useBookData';
import { CreateModal } from './Create-modal';
import '../styles/ProductList.css'

function ProductList({ addToCart }: { addToCart: (book: BookData) => void }) {
    const { data } = useBookData();
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleOpenModal = () => {
      setIsModalOpen(prev => !prev);
    }
  
    return (
      <div className="container">
        <div className='card-grid'>
          {data?.map((bookData: BookData) => (
            <Card
              key={bookData.id}
              value={bookData.value}
              title={bookData.title}
              description={bookData.description}
              image={bookData.image}
              onClick={() => addToCart(bookData)}
            />
          ))}

        </div>
        {isModalOpen && <CreateModal closeModal={handleOpenModal} />}
        <button onClick={handleOpenModal}>Novo</button>
      </div>
    );
  }

  export default ProductList;