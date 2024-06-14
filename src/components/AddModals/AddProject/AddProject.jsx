import React, { useState, useEffect } from 'react';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from "./AddProject.module.scss"

function AddProject({onModal}) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = e => {
        const {name, value} = e.currentTarget;
        switch (name) {
           case 'title':
            setTitle(value);
             break;
            case 'description':
            setDescription(value);
            break;
               default:
               return;  
        }
    }

    const handleSubmit = async e => {
        e.preventDefault();
        if (title === '' && description === '') {
            toast.error("Заповніть усі поля!");
            return;
        }
    
        const data = {
            title,
            description
            
        }
        console.log(data);
        setTitle('');
        setDescription('');
        onModal()
    }

    const disabled = title === '' || description === '';

    return (
        <div>
            <form className={s.container} onSubmit={handleSubmit}>
            <div className={s.inputContainer}>
                    <label  for="title">Найменування</label>
                    <input type="text" maxLength="20" name="title" id="title"  value={title} onChange={handleChange} 
                    placeholder="Введіть сюди назву об'єкту (20 символів)" />
            </div>
            <div className={s.inputContainer}>
                    <label  for="description">Адреса об'єкту</label>
                    <input type="text" maxLength="30" name="description" id="description"  value={description} onChange={handleChange} 
                    placeholder="Введіть сюди адресу об'єкту (30 символів)" />
                </div>
                <button disabled={disabled} className={disabled ? "button-disabled" : "button"} type="submit">Додати</button>
            </form>
        </div>
    )
}

export default AddProject;