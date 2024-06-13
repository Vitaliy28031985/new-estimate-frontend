import { useState} from 'react';
import { NavLink } from 'react-router-dom';
import Line from "../Icons/Line/Line";
import Update from "../Icons/Update/UpdateIcon";
import Delete from "../Icons/Delete/Delete";
import Setting from "../Icons/Setting/Setting";
import s from "./Profile.module.scss";
import Modal from "../Modal/Modal";



function ProfileComponent() {
    const [showMenu, setShowMenu] = useState(false);




    const handleToggle = () => {
        setShowMenu(showMenu => !showMenu);
        
      }


    return(
    <div>
        <h1>Профіль користувача</h1>
       <div className={s.container}>
        <div className={s.userDataContainer}> 
        <div className={s.avatarContainer}>
            <img src="https://res.cloudinary.com/dpzitieam/image/upload/v1717783856/uqaafmmibkxvbcn0gal3.jpg" alt="avatar" />
        </div>
        <ul className={s.data}>
        <li className={s.dataItem}>
            <p className={s.dataTitle}>Ім'я: </p>
            <p className={s.dataContent}>Віталій</p>
        </li>
        <li className={s.dataItem}>
            <p className={s.dataTitle}>Email: </p>
            <p className={s.dataContent}>vitaliy4@i.ua</p>
        </li>
        <li className={s.dataItem}>
            <p className={s.dataTitle}>Номер телефону: </p>
            <p className={s.dataContent}>+38098334446677</p>
        </li>
        <li className={s.dataItem}>
            <p className={s.dataTitle}>Роль користувача: </p>
            <p className={s.dataContent}>Адміністратор</p>
        </li> 
        </ul>
        <div className={s.adminFunction}>
            <h3>Доступ користувачів</h3>
            <form >
                <div className={s.input}>
                <label id="data">Кількість днів</label>
                <input type="number" name="data" />
                </div>
                <div className={s.input}>
                <label id="email">Email</label>
                <input type="email" name="email" />
                </div>
                <button type="submit">Надати</button>
            </form>
        </div>
        </div>

        <div className={s.cardContainer}>
        <ul className={s.cardContent}>
        <li className={s.card}>
            <div className={s.buttons}>
            <button className={s.button}><Update width={"20"} height={"20"}/></button>
            <button className={s.button}><Delete width={"20"} height={"20"}/></button>
            <button className={s.button}><Setting width={"20"} height={"20"}/></button>
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
                < NavLink to="/project/settings/12" className={s.link} href="">Детальніше <Line/></ NavLink >
        </li>
        <li className={s.card}>
            <div className={s.buttons}>
            <button className={s.button}><Update width={"20"} height={"20"}/></button>
            <button className={s.button}><Delete width={"20"} height={"20"}/></button>
            <button className={s.button}><Setting width={"20"} height={"20"}/></button>
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
            <button className={s.button}><Update width={"20"} height={"20"}/></button>
            <button className={s.button}><Delete width={"20"} height={"20"}/></button>
            <button className={s.button}><Setting width={"20"} height={"20"}/></button>
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
            <button className={s.button}><Update width={"20"} height={"20"}/></button>
            <button className={s.button}><Delete width={"20"} height={"20"}/></button>
            <button className={s.button}><Setting width={"20"} height={"20"}/></button>
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
        </ul>
        </div>
       </div> 
       </div>
    )

}

export default ProfileComponent;