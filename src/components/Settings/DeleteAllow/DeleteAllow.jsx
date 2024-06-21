import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams  } from 'react-router-dom';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useGetUsersQuery} from '../../../redux/auth/authApi';
import { useGetProjectByIdQuery } from '../../../redux/projectSlice/projectSlice';
import {useDeleteAllowMutation} from "../../../redux/auth/authApi";

import {projectsApi} from "../../../redux/projectSlice/projectSlice";

import s from "./DeleteAllow.module.scss";

function DeleteAllow() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {data} = useGetUsersQuery();
    const { data: project } = useGetProjectByIdQuery(id);
    const [deleteAllow] = useDeleteAllowMutation();

    const [userData, setUserData] = useState(null);
    const [projectArr, setProjectArr] =useState(null)

    const [email, setEmail] = useState('');

    useEffect(() => {
        if (data) {
        setUserData(data);
       
        }  
       
      }, [data]);
      
      useEffect(() => {
        if(project) {
          setProjectArr(project);  
         } 
      }, [project, id]
      
      )

      const userIdList =  projectArr?.allowList;
      let userEmailList = [];

      const renderData = () => {
      for(let i = 0; i < userIdList?.length; i++) {
      const userWithProject = userData?.filter(({_id}) => _id === userIdList[i]) 

      if (userWithProject && userWithProject.length > 0) {
        userEmailList.push(userWithProject[0].email);
      }    
    }
  
}

renderData()

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
       
        const res = await deleteAllow({id, newData: {email}});
        dispatch(projectsApi.util.resetApiState());  
        // console.log("DELETE", res );
        toast(`Дозвіл до кошторису користувача з email: ${email}  скасовано!`);
        if(res.error) {
            toast.error(res.error.data.message)
        } else{
        
    }

        setEmail('');
           
    }


    // const emails = ["vitaliy4@i.ua", "David@i.ua", "socil@i.ua"];
    
    const disabled = email === '';

    return (
        <div className={s.container}>
            <form onSubmit={handleSubmit}>
            <div className={s.inputContainer}>
                    <label  for="email">Забрати доступ до кошторису у користувача</label>
                    <select  name="email" id="email" onChange={handleChange}>
                        {userEmailList?.map(email =>
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