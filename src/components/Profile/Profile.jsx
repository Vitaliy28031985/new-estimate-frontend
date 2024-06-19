import { useState} from 'react';
// import { NavLink } from 'react-router-dom';
import AdminFunctions from './AdminFunctions/AdminFunctions';

import Unit from './Unit/Unit';
import ProjectsProfile from './ProjectsProfile/ProjectsProfile';

import s from "./Profile.module.scss";

const admin = true; 

function ProfileComponent() {
    const [isAdmin, setIsAdmin] = useState(false);

    const handleToggle = () => {
        setIsAdmin(isAdmin => !isAdmin);
        
      }
      const yesToggle = admin && isAdmin;


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
        {admin ? (<div >
            {isAdmin ? (<AdminFunctions/>) : (<Unit />)} 
            <button className={s.toggleButton} type='button' onClick={handleToggle}>{isAdmin ? "До одиниць" : "До дозволу"}</button>
        </div>) : (<Unit />)}
       
        </div>
        <ProjectsProfile/>
        
       </div> 
       </div>
    )

}

export default ProfileComponent;