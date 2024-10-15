import { Card } from './Card-items';
import { BookData } from '../interface/BookData';
import { useBookData } from '../hooks/useBookData';
import '../styles/ProductList.css'
import staticProducts from './StaticBooks';
import { priceFormat } from './Cart';

//This is the function that saves the rules about the product list visualization;
function ProductList({ addToCart }: { addToCart: (book: BookData) => void }) {

  //First we try to use the data coming from the API, if there is no data we use the static one's;
  var { data } = useBookData();
  if(!data){
    data = [...staticProducts];
  }

  
  return (
    <div className='pl-container'>
      <div className='card-grid'> 
        {data?.map((bookData: BookData) => (
          <Card
            key={bookData.id}
            value={priceFormat(bookData.value)}
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