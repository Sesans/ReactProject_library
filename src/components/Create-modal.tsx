import { useEffect, useState } from 'react';
import { useBookDataMutate } from '../hooks/useBookDataMutate';
import { BookData } from '../interface/BookData';

import '../styles/Modal.css';

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void
}   

interface ModalProps {
    closeModal(): void
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}

export function CreateModal({ closeModal }: ModalProps){
    const [title, setTitle] = useState("");
    const [value, setValue] = useState(0);
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [unitsAvailable, setUnitsAvailable] = useState(0);
    const { mutate, isSuccess, isPending } = useBookDataMutate();

    const submit = () => {
        const bookData: BookData = {
            id: 0,
            title,
            image,
            description,
            value,
            unitsAvailable
        }
        mutate([bookData])
    }

    useEffect(() => {
        if(!isSuccess) return 
        closeModal();
    }, [isSuccess])

    return(
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Add a new item</h2>
                <button className="btn-close" onClick={closeModal}>×</button>
                <form className="input-container">
                    <Input label="Title" value={title} updateValue={setTitle}/>
                    <Input label="Price" value={value} updateValue={setValue}/>
                    <Input label="Image URL" value={image} updateValue={setImage}/>
                    <Input label="Description" value={description} updateValue={setDescription}/>
                    <Input label="Units Available" value={unitsAvailable} updateValue={setUnitsAvailable} />
                </form>
                <button onClick={submit} className="btn-secondary">
                    {isPending ? 'posting...' : 'post'}
                </button>
            </div>
        </div>
    )
}