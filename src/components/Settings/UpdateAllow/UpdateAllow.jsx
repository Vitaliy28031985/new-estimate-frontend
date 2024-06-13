import React, { useState, useEffect } from 'react';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from "./UpdateAllow.module.scss";

function UpdateAllow() {
      
    const [email, setEmail] = useState('');
    const [level, setLevel] = useState('');
    const [lookAt, setLookAt] =useState('');
    const [lookAtTotals, setLookAtTotals] = useState('');

    const handleChange = (e) => {

        const { name, value } = e.currentTarget;
        switch (name) {
        case 'email':
            setEmail(value);
            break;
        case 'updateLevel':
             setLevel(value);
             break;
        case 'UpdateLookAt':
             setLookAt(value);
             break;
        case 'updateLookAtTotals':
             setLookAtTotals(value)
             break;
          default:
            return;
        }
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        if ( email === '' || level === '' || lookAt === '' || lookAtTotals === '') {
            toast.error("Заповніть усі поля!");
            return;
        }
        console.log("UPDATE", {email, level, lookAt, lookAtTotals});

        setEmail('');
        setLevel('');
        setLookAt('');
        setLookAtTotals('');
    
    }
const emails = ["vitaliy4@i.ua", "David@i.ua", "socil@i.ua"];

    const disabled = email === '' && level === '' && lookAt === '' && lookAtTotals === '' ;
    return(
        <div className={s.container}>
            <form onSubmit={handleSubmit}>
                <div className={s.inputContainer}>
                    <label  for="email">Обновлення даних дозволу до кошторису користувача</label>
                    <select  name="email" id="email" onChange={handleChange}>
                        {emails?.map(email =>
                           (<option value={email} >{email}</option>))}
                            <option value="" selected>Вибери email для обновлення даних</option>
                     </select>
                </div>

                <div className={s.radioContent}>
                    <p className={s.titleRadio}>Рівень доступу:</p>
                    <div className={s.radioContainer}>
                <div>
                    <input className={s.real} type="radio"  name="updateLevel" id="updateWead" onChange={handleChange} checked={level === "read"}  value="read"/>
                    <span className={s.falseness}></span>
                    <label className={s.label} name="allowLevel"  for="updateWead">Перегляд</label>
                </div>
                <div>
                    <input className={s.real} type="radio"  id="updateWrite" name="updateLevel" onChange={handleChange} checked={level === "write"} value="write"  />
                    <span className={s.falseness}></span>
                    <label className={s.label} name="allowLevel"  for="updateWrite">Редагування</label>
                </div>
                </div>
                </div>

                <div className={s.radioContent}>   
                    <p className={s.titleRadio}>Рівень доступу до кошторисів:</p>
                    <div className={s.radioContainer}>
                <div>
                    <input className={s.real} type="radio"  name="UpdateLookAt" id="updateAarge" onChange={handleChange} checked={lookAt === "large"} value="large"/>
                    <span className={s.falseness}></span>
                    <label className={s.label} name="lookAt"  for="updateAarge">загального</label>
                </div>
                <div>
                    <input className={s.real} type="radio"  id="updateAmall" name="UpdateLookAt" onChange={handleChange} checked={lookAt === "small"}   value="small"  />
                    <span className={s.falseness}></span>
                    <label className={s.label} name="lookAt"  for="updateAmall">меншого</label>
                </div>
                <div>
                    <input className={s.real} type="radio"  id="updateAll" name="UpdateLookAt" onChange={handleChange} checked={lookAt === "all"} value="all"  />
                    <span className={s.falseness}></span>
                    <label className={s.label} name="lookAt"  for="updateAll">всіх</label>
                </div>
                </div>
                </div>

                <div className={s.radioContent}>
                    <p className={s.titleRadio}>Рівень показу меншого звіту:</p>
                    <div className={s.radioContainer}>
                <div>
                    <input className={s.real} type="radio"  name="updateLookAtTotals" id="updateShow" onChange={handleChange} checked={lookAtTotals === "show"} value="show"/>
                    <span className={s.falseness}></span>
                    <label className={s.label} name="allowLevel"  for="updateShow">Показувати</label>
                </div>
                <div>
                    <input className={s.real} type="radio"  id="updateNotShow" name="updateLookAtTotals" onChange={handleChange} checked={lookAtTotals === "notShow"} value="notShow"/>
                    <span className={s.falseness}></span>
                    <label className={s.label} name="allowLevel"  for="updateNotShow">Не показувати</label>
                </div>
                </div>
                </div>
                <button disabled={disabled} className={disabled ? "button-disabled" : "button"} type="submit">Обновити</button>
            </form>
        </div>
    )
}

export default UpdateAllow;