import React, { useState, useEffect } from 'react';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from "./DeleteAllow.module.scss";

function DeleteAllow() {
    const [email, setEmail] = useState('');

    const handleChange = (e) => {

        const { name, value } = e.currentTarget;
        switch (name) {
        case 'email':
            setEmail(value);
            break;
          default:
            return;
        }
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        if ( email === '') {
            toast.error("Заповніть усі поля!");
            return;
        }
        console.log("DELETE", {email});

        setEmail('');
           
    }


    const emails = ["vitaliy4@i.ua", "David@i.ua", "socil@i.ua"];
    
    const disabled = email === '';

    return (
        <div className={s.container}>
            <form onSubmit={handleSubmit}>
            <div className={s.inputContainer}>
                    <label  for="email">Забрати доступ до кошторису у користувача</label>
                    <select  name="email" id="email" onChange={handleChange}>
                        {emails?.map(email =>
                           (<option value={email} >{email}</option>))}
                            <option value="" selected>Вибери email для видалення даних</option>
                     </select>
                </div>
                <button disabled={disabled} className={disabled ? "button-disabled" : "button"} type="submit">Забрати</button>
            </form>
        </div>
    )
}

export default DeleteAllow;