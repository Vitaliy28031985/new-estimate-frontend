import { useState, useEffect} from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Mic from "../../../Icons/Mic/Mic";
import s from "./Input.module.scss"

function Input({onModal}) {
    const [title, setTitle] = useState('');
    const [unit, setUnit] = useState('');
    const [number, setNumber] = useState('');
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
    const {name, value,} = e.currentTarget;
    switch (name) {
      
       case 'title':
        setTitle(value);
        break;
        case 'unit':
        setUnit(value);
        break;
        case 'number':
        setNumber(value);
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
    if(unit === '' || number === '' || title === '' || price === '') {
      toast.error("Усі поля мають бути заповнені")
      return;
    }

  
  await onModal("position", {title, unit, number: Number(number), price: Number(price)});

      setTitle('');
      setNumber('');
      setUnit('');
      setPrice('')
      
  }


 const disabled = unit === '' && number === '' && title === '' && price === '';

    return(

<form action="" onSubmit={handleSubmit}>
<div className={s.titleContainer}>
  <p className={s.label}>Назва роботи</p>
  <input className={s.input}  name="title" value={title} id="title" onChange={handleChange}/>
  <div className={s.titleButton} onClick={handleStartRecordingClick}><Mic width={"24px"} height={"24px"}/></div>
</div>
<div>
  <p className={s.label}>Одиниця</p>
  <input className={s.input} type="text" value={unit} name="unit" onChange={handleChange} />
</div>
<div>
  <p className={s.label}>Кількість</p>
  <input className={s.input} type="number" value={number} name="number" onChange={handleChange} />
</div>
<div>
  <p className={s.label}>Ціна</p>
  <input className={s.input} type="number" value={price} name="price" onChange={handleChange} />
</div>

<button disabled={disabled} className={disabled ? "button-disabled" : "button"}>Додати</button>
</form>

    )

}

export default Input;