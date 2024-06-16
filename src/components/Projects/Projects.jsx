import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import AddProject from '../AddModals/AddProject/AddProject';
import Modal from '../Modal/Modal';
import Line from "../Icons/Line/Line";
import Add from "../Icons/Add/Add";
import Update from "../Icons/Update/UpdateIcon";
import Delete from "../Icons/Delete/Delete";

import s from "./Projects.module.scss";

import projects from "../../db/projects.json";

function ProjectsComponent () {
    const [data, setData] = useState(projects);
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(toggle => !toggle);
    }

    console.log(data);

    return (
        <div>
            <div className={s.title}>
            <h1>Список кошторисів</h1> 
            <button onClick={handleToggle} className={s.addButton}><Add width={"28"} height={"28"}/></button>
            </div>
        <div className={s.container}>
            
            {data && (
             <ul className={s.cardContainer}>
                {data && data.map(({_id, title, description, total}) => (
            <li className={s.card} key={_id} id={_id}>
                <div className={s.buttons}>
                <button className={s.button}><Update width={"24"} height={"24"}/></button>
                <button className={s.button}><Delete width={"24"} height={"24"}/></button>
                </div>
                <div>
                <p className={s.title}>Назва кошторису:</p> <p className={s.titleData}>{title}</p>
                </div>
                <div>
                <p className={s.address}>Адреса об'єкту:</p> <p className={s.addressData}>{description}</p>
                </div>
                <div>
                <p className={s.title}>Сума кошторису:</p> <p className={s.titleData}>{total}</p>
                </div>
                <NavLink  className={s.link} to={`/project/${_id}`}>Детальніше <Line/></NavLink >
            </li>) 
                )}
                       
           </ul>    
            )}
        
        </div>
        {toggle && (<Modal onModal={handleToggle}><AddProject onModal={handleToggle}/></Modal>)}
        </div>
    )
}

export default ProjectsComponent;