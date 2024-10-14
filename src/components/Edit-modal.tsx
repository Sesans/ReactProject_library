import { useState } from 'react';
import {BookData} from '../interface/BookData'
import '../styles/Edit-modal.css'
import { FiSave } from "react-icons/fi";

interface EditModalProps {
  product: BookData | null;
  quantity: number;
  closeModal: () => void;
  updateQuantity: (id: number, quantity: number) => void;
}

export function EditModal(props: EditModalProps) {
  if (!props.product) return null;

  const [newQuantity, setNewQuantity] = useState(props.quantity);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (props.product) {
      props.updateQuantity(props.product.id, newQuantity);
      props.closeModal();
    }
  };

  return (
    <div className="edit-modal-overflow">
      <div className="edit-modal-body">
        <button className="btn-close" onClick={props.closeModal}>x</button>
        <section className='modal-info'>
          <h2>{props.product?.title}</h2>
          <div className='img-description'>
            <img src={props.product?.image} alt={props.product?.title} />
            <p>{props.product?.description}</p>
          </div>
          <p><b>Unit Value:</b>{props.product.value}</p>
        </section>
        <form onSubmit={handleSubmit}>
          <label><b>Quantity</b></label>
          <input
            type="number"
            value={newQuantity}
            min='1'
            onChange={(event) => setNewQuantity(parseInt(event.target.value))}
          />
          <button className='submit-button'><b>Save changes</b>  <FiSave /></button>
        </form>
      </div>
    </div>
  );
}