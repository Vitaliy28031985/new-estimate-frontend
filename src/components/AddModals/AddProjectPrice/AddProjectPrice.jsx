import React, { useState, useEffect } from 'react';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Mic from "../../Icons/Mic/Mic";
import s from "./AddProjectPrice.module.scss";

function AddProjectPrice({onModal}) {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [recognition, setRecognition] = useState(null);

    useEffect(() => {
        if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            const recognitionInstance = new SpeechRecognition();
            recognitionInstance.lang = 'uk-UA';
            recognitionInstance.interimResults = true;
            setRecognition(recognitionInstance);
        } else {

            // toast.error("Розпізнавання мови не підтримується в цьому браузері!");
            console.log('Розпізнавання мови не підтримується в цьому браузері.');
        }
    }, []);

    useEffect(() => {
        if (recognition) {
            recognition.onresult = (event) => {
                const transcript = Array.from(event.results)
                    .map(result => result[0].transcript)
                    .join('');

                const transcriptArr = transcript.split('');
                if (transcriptArr.length > 0) {
                    transcriptArr[0] = transcriptArr[0].toUpperCase();
                }
                setTitle(transcriptArr.join(""));
            };
        }
    }, [recognition]);

    const startRecording = () => {
        if (recognition) {
            recognition.start();
        }
    };

    const handleStartRecordingClick = () => {
        startRecording();
    };



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
                    <div className={s.titleInputContainer}>
                    <input type="text" name="title" id="title"  value={title} onChange={handleChange} 
                    placeholder="Введіть сюди назву роботи" />
                    <div className={s.titleButton} onClick={handleStartRecordingClick}><Mic width={"24px"} height={"24px"}/></div>
                    </div>
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

export default AddProjectPrice;