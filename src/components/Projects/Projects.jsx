import { useState } from 'react';
import AddProject from '../AddModals/AddProject/AddProject';
import Modal from '../Modal/Modal';
import Line from "../Icons/Line/Line";
import Add from "../Icons/Add/Add";
import Update from "../Icons/Update/UpdateIcon";
import Delete from "../Icons/Delete/Delete";

import s from "./Projects.module.scss";

function ProjectsComponent () {

    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(toggle => !toggle);
    }

    return (
        <div>
            <div className={s.title}>
            <h1>Список кошторисів</h1> 
            <button onClick={handleToggle} className={s.addButton}><Add width={"28"} height={"28"}/></button>
            </div>
        <div className={s.container}>
            
           
         
         <ul className={s.cardContainer}>
            <li className={s.card}>
            <div className={s.buttons}>
            <button className={s.button}><Update width={"24"} height={"24"}/></button>
            <button className={s.button}><Delete width={"24"} height={"24"}/></button>
            </div>
                <div>
                <p className={s.title}>Назва кошторису:</p> <p className={s.titleData}>Андрій Сихів</p>
                </div>
                <div>
                <p className={s.address}>Адреса об'єкту:</p> <p className={s.addressData}>Шевченка, 40</p>
                </div>
                <div>
                <p className={s.title}>Сума кошторису:</p> <p className={s.titleData}>70679</p>
                </div>
                <a className={s.link} href="">Детальніше <Line/></a>
            </li>
            <li className={s.card}>
            <div className={s.buttons}>
            <button className={s.button}><Update width={"24"} height={"24"}/></button>
            <button className={s.button}><Delete width={"24"} height={"24"}/></button>
            </div>
                <div>
                <p className={s.title}>Назва кошторису:</p> <p className={s.titleData}>Андрій Сихів</p>
                </div>
                <div>
                <p className={s.address}>Адреса кошторису:</p> <p className={s.addressData}>Шевченка, 40</p>
                </div>
                <div>
                <p className={s.title}>Сума кошторису:</p> <p className={s.titleData}>70679</p>
                </div>
                <a className={s.link} href="">Детальніше <Line/></a>
            </li>
            <li className={s.card}>
            <div className={s.buttons}>
            <button className={s.button}><Update width={"24"} height={"24"}/></button>
            <button className={s.button}><Delete width={"24"} height={"24"}/></button>
            </div>
                <div>
                <p className={s.title}>Назва кошторису:</p> <p className={s.titleData}>Андрій Сихів</p>
                </div>
                <div>
                <p className={s.address}>Адреса кошторису:</p> <p className={s.addressData}>Шевченка, 40</p>
                </div>
                <div>
                <p className={s.title}>Сума кошторису:</p> <p className={s.titleData}>70679</p>
                </div>
                <a className={s.link} href="">Детальніше <Line/></a>
            </li>
            <li className={s.card}>
            <div className={s.buttons}>
            <button className={s.button}><Update width={"24"} height={"24"}/></button>
            <button className={s.button}><Delete width={"24"} height={"24"}/></button>
            </div>
                <div>
                <p className={s.title}>Назва кошторису:</p> <p className={s.titleData}>Андрій Сихів</p>
                </div>
                <div>
                <p className={s.address}>Адреса кошторису:</p> <p className={s.addressData}>Шевченка, 40</p>
                </div>
                <div>
                <p className={s.title}>Сума кошторису:</p> <p className={s.titleData}>70679</p>
                </div>
                <a className={s.link} href="">Детальніше <Line/></a>
            </li>
            <li className={s.card}>
            <div className={s.buttons}>
            <button className={s.button}><Update width={"24"} height={"24"}/></button>
            <button className={s.button}><Delete width={"24"} height={"24"}/></button>
            </div>
                <div>
                <p className={s.title}>Назва кошторису:</p> <p className={s.titleData}>Андрій Сихів</p>
                </div>
                <div>
                <p className={s.address}>Адреса кошторису:</p> <p className={s.addressData}>Шевченка, 40</p>
                </div>
                <div>
                <p className={s.title}>Сума кошторису:</p> <p className={s.titleData}>70679</p>
                </div>
                <a className={s.link} href="">Детальніше <Line/></a>
            </li>
            <li className={s.card}>
            <div className={s.buttons}>
            <button className={s.button}><Update width={"24"} height={"24"}/></button>
            <button className={s.button}><Delete width={"24"} height={"24"}/></button>
            </div>
                <div>
                <p className={s.title}>Назва кошторису:</p> <p className={s.titleData}>Андрій Сихів</p>
                </div>
                <div>
                <p className={s.address}>Адреса кошторису:</p> <p className={s.addressData}>Шевченка, 40</p>
                </div>
                <div>
                <p className={s.title}>Сума кошторису:</p> <p className={s.titleData}>70679</p>
                </div>
                <a className={s.link} href="">Детальніше <Line/></a>
            </li>
           </ul>
        </div>
        {toggle && (<Modal onModal={handleToggle}><AddProject onModal={handleToggle}/></Modal>)}
        </div>
    )
}

export default ProjectsComponent;