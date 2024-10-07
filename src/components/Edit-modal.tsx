import {BookData} from '../interface/BookData'
import '../styles/Edit-modal.css'
import { priceFormat } from './Cart';

interface EditModalProps {
    product: BookData | null;
    quantity: number;
    closeModal: () => void;
    removeFromCart: (id: number) => void;
  }
  
  export function EditModal(props: EditModalProps) {
    if (!props.product) return null;

    const handleRemoveFromCart = () => {
        if(props.product){
            props.removeFromCart(props.product.id);
            props.closeModal();
        }
      };
  
    return (
      <div className="edit-modal-overflow">
        <div className="edit-modal-body">
          <h2>{props.product.title}</h2>
          <img src={props.product.image} alt={props.product.title} />
          <p>Valor: {priceFormat(props.product.value * props.quantity)}</p>
          <p>Quantidade: {props.quantity}</p>
          <button onClick={handleRemoveFromCart}>Remover do carrinho</button>
          <button className="btn-close" onClick={props.closeModal}>x</button>
          
        </div>
      </div>
    );
  }
  