import React, { useState, useEffect } from 'react';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import price from "../../../db/price.json";

import s from "./Unit.module.scss";

function Unit() {
    const [id, setId] = useState('');
    const [unit, setUnit] = useState('');
    const [deleteUnit, setDeleteUnit] = useState('');

    const handleChange = (e) => {

        const { name, value, id } = e.currentTarget;
        switch (name) {
        case 'unit':
            setUnit(value);
            setId(id);
            break;
        case 'delete':
             setDeleteUnit(value);
             setId(id);
             break;
      
          default:
            return;
        }
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        if(id === "unit") {
            
            console.log(unit);
            toast("Одиницю додано!");
            setUnit('');
            return;
        } 
        if(deleteUnit !== '') {
            console.log(deleteUnit)
            toast("Одиницю видалено!");
            setDeleteUnit('');
            return;
        }
       }

       console.log(deleteUnit)

       const empty = unit === '' && deleteUnit === '';

    return(
        <div className={s.adminFunction}>
        <h3>Одиниці виміру</h3>
        <form onSubmit={handleSubmit}>
            <div className={s.input}>
            <label for="unit">Додати одиницю</label>
            <input type="text" onChange={handleChange} name="unit" id="unit" value={unit} />
            </div>
            <div className={s.input}>
                    <label  for="delete">Видалити одиницю</label>
                    <select  name="delete" id="delete" onChange={handleChange}>
                        {price?.map(({title, _id}) =>
                           (<option value={_id} >{title}</option>))}
                           {deleteUnit === '' && (<option value="" selected>Вибери для видалення</option>)}
                     </select>
                </div>
         <button disabled={empty} className={empty ? "button-disabled-unit" : "unit-Button"} type="submit">{unit !== ''  ? "Додати" : "Видалити"}</button>
         
           
        </form>
    </div>
    )
}

export default Unit;