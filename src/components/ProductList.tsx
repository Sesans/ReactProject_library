import { Card } from './Card-items';
import { BookData } from '../interface/BookData';
import { useBookData } from '../hooks/useBookData';
import '../styles/ProductList.css'

function ProductList({ addToCart }: { addToCart: (book: BookData) => void }) {
    const { data } = useBookData();

    return (
      <div className="pl-container">
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
      </div>
    );
  }

  export default ProductList;