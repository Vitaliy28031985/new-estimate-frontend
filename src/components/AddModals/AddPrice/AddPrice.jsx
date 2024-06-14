import React, { useState, useEffect } from 'react';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from "./AddPrice.module.scss";

function AddPrice({onModal}) {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');

    const handleChange = e => {
        const {name, value} = e.currentTarget;
        switch (name) {
           case 'title':
            setTitle(value);
             break;
            case 'price':
            setPrice(value);
            break;
               default:
               return;  
        }
    }

    const handleSubmit = async e => {
        e.preventDefault();
        if (title === '' && price === '') {
            toast.error("Заповніть усі поля!");
            return;
        }
    
        const data = {
            title,
            price
            
        }
        console.log(data);
        setTitle('');
        setPrice('');
        onModal()
    }

    const disabled = title === '' || price === '';

    return (
        <div>
            <form className={s.container} onSubmit={handleSubmit}>
            <div className={s.inputContainer}>
                    <label  for="title">Найменування роботи</label>
                    <input type="text" name="title" id="title"  value={title} onChange={handleChange} 
                    placeholder="Введіть сюди назву роботи" />
            </div>
            <div className={s.inputContainer}>
                    <label  for="price">Ціна роботи</label>
                    <input type="number" name="price" id="price"  value={price} onChange={handleChange} 
                    placeholder="Введіть сюди ціну роботи" />
                </div>
                <button disabled={disabled} className={disabled ? "button-disabled" : "button"} type="submit">Додати</button>
            </form>
        </div>
    )
}

export default AddPrice;