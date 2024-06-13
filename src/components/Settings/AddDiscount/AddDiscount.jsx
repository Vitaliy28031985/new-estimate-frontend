import React, { useState, useEffect } from 'react';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from "./AddDiscount.module.scss";

function AddDiscount() {
    const [discount, setDiscount] = useState('');

    const handleChange = e => {
        const {name, value} = e.currentTarget;
        switch (name) {
           case 'discount':
               setDiscount(value);
               break;
               default:
               return;  
        }
    }

    const handleSubmit = async e => {
        e.preventDefault();
        if (discount === '') {
            toast.error("Заповніть усі поля!");
            return;
        }
    
        const data = {
            discount,
            
        }
        console.log(data);
    }

    const disabled = discount === '';

    return (
        <div className={s.container}>
            <form onSubmit={handleSubmit}>
            <div className={s.inputContainer}>
                    <label  for="discount">Формування знижки</label>
                    <input type="number" name="discount" id="discount" onChange={handleChange}  value={discount}  
                    placeholder="Введіть сюди  відсоток знижки" />
                </div>
                <button disabled={disabled} className={disabled ? "button-disabled" : "button"} type="submit">Сформувати</button>
            </form>
        </div>
    )
}

export default AddDiscount;