import { useState, useEffect} from "react";
import {useCurrentQuery} from "../../../redux/auth/authApi";
import Unit from '../Unit/Unit';
import AdminFunctions from '../AdminFunctions/AdminFunctions';
import s from "./ProfileInfo.module.scss";

const admin = true; 

function ProfileInfo() {
    const {data} = useCurrentQuery();
    const [userRole, setUserRole] = useState(false);
  
    const [isAdmin, setIsAdmin] = useState(false);

    const handleToggle = () => {
        setIsAdmin(isAdmin => !isAdmin);
        
      }
    
      useEffect(() => {

        if (data) {
          const role = data?.role;
          const isUserRole = role === "admin";
             setUserRole(isUserRole);
        }
    }, [data, userRole]);
  
   
      let role = "";
      
  
      if(data?.role === "executor") {
          role = "виконавець";
      }
  
      if(data?.role === "admin") {
          role = "адміністратор";
      }
  
      if(data?.role === "customer") {
          role = "замовник";
      }

      const defaultAvatar = "https://www.shutterstock.com/image-illustration/avatar-modern-young-guy-working-260nw-2015853839.jpg";
      const avatarUrl = data?.avatar || defaultAvatar;
  
  
    //   const handleChange = e => {
    //       const {name, value} = e.currentTarget;
    //       switch (name) {
    //          case 'email':
    //              setEmail(value);
    //              break;
    //          case 'time':
    //              setTime(value);
    //              break;
    //          default:
    //              return;  
    //       }
    //   }
  
    //   const handleSubmit = async e => {
    //       e.preventDefault();
    //       if (email === '' || time === '') {
    //           toast("Заповніть усі поля!");
    //           return;
    //       }
    //       const allowObj = {
    //           email,
    //           time: Number(time)
    //       }
    //       await addAllowUser(allowObj);
  
    //       setEmail('');
    //       setTime('');
    //   }
      

    return(
        <div>
        <div className={s.userDataContainer}> 
        <div className={s.avatarContainer}>
            <img src={avatarUrl} alt="avatar"  onError={(e) => { e.target.src = defaultAvatar; }} />
        </div>
        <ul className={s.data}>
        <li className={s.dataItem}>
            <p className={s.dataTitle}>Ім'я: </p>
            <p className={s.dataContent}>{data?.name}</p>
        </li>
        <li className={s.dataItem}>
            <p className={s.dataTitle}>Email: </p>
            <p className={s.dataContent}>{data?.email}</p>
        </li>
        <li className={s.dataItem}>
            <p className={s.dataTitle}>Номер телефону: </p>
            <p className={s.dataContent}>{data?.phone}</p>
        </li>
        <li className={s.dataItem}>
            <p className={s.dataTitle}>Роль користувача: </p>
            <p className={s.dataContent}>{role}</p>
        </li> 
        </ul>
        
        {userRole ? (<div >
            {isAdmin ? (<AdminFunctions/>) : (<Unit />)} 
            <button className={s.toggleButton} type='button' onClick={handleToggle}>{isAdmin ? "До одиниць" : "До дозволу"}</button>
        </div>) : (<Unit />)}
       
        </div>
       </div>
       
    )
}

export default ProfileInfo;