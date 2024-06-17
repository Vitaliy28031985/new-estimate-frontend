import React, { useState, useEffect } from 'react';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from "./AddEstimate.module.scss";

function AddEstimate({onModal}) {
    const [title, setTitle] = useState('');
    
    const handleChange = e => {
        const {name, value} = e.currentTarget;
        switch (name) {
           case 'title':
            setTitle(value);
             break;
               default:
               return;  
        }
    }

    const handleSubmit = async e => {
        e.preventDefault();
      
    
        const data = {
            title,   
            
        }
        console.log(data);
        setTitle('');
        onModal()
    }

    const disabled = title === '';

    return (
        <div>
            <form className={s.container} onSubmit={handleSubmit}>
            <div className={s.inputContainer}>
                    <label  for="title">Найменування</label>
                    <input type="text" maxLength="20" name="title" id="title"  value={title} onChange={handleChange} 
                    placeholder="Введіть сюди назву таблиці (20 символів)" />
            </div>
        
                <button disabled={disabled} className={disabled ? "button-disabled" : "button"} type="submit">Додати</button>
            </form>
        </div>
    )
}

export default AddEstimate;