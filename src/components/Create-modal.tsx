import { useEffect, useState } from 'react';
import { useBookDataMutate } from '../hooks/useBookDataMutate';
import { BookData } from '../interface/BookData';

import "../styles/modal.css";

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
    const { mutate, isSuccess, isPending } = useBookDataMutate();

    const submit = () => {
        const bookData: BookData = {
            id: 0,
            title,
            image,
            description,
            value
        }
        mutate(bookData)
    }

    useEffect(() => {
        if(!isSuccess) return 
        closeModal();
    }, [isSuccess])

    return(
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre um novo item no cardápio</h2>
                <form className="input-container">
                    <Input label="title" value={title} updateValue={setTitle}/>
                    <Input label="price" value={value} updateValue={setValue}/>
                    <Input label="image" value={image} updateValue={setImage}/>
                    <Input label="description" value={description} updateValue={setDescription}/>
                </form>
                <button onClick={submit} className="btn-secondary">
                    {isPending ? 'postando...' : 'postar'}
                </button>
            </div>
        </div>
    )
}