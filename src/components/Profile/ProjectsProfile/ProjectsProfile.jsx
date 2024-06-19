import { useState} from 'react';
import { NavLink } from 'react-router-dom';

import DeleteModal from '../../DeleteModal/DeleteModal';

import Line from '../../Icons/Line/Line';
import Update from '../../Icons/Update/UpdateIcon';
import Delete from '../../Icons/Delete/Delete';
import Setting from '../../Icons/Setting/Setting';

import s from "./ProjectsProfile.module.scss";

import projects from "../../../db/projects.json";

function ProjectsProfile() {
    const [currentData, setCurrentData] = useState({});
    const [data, setData] = useState(projects);
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(toggle => !toggle);
    }

    const addIsToggle = (id, currentIsShow, name) => {
        setData(prevData => {
            const newData = prevData.map(project => {
                if (project._id === id) {
                    if(name === 'update') {
                        return { ...project, isShow: currentIsShow };
                    }
                    if(name === 'delete') {
                        return { ...project, isDelete: currentIsShow };
                    }
                }
                return project; 
            });
        
            return newData
        });
    };
    
    const onChange = (e) => {
        const { name, value, id } = e.currentTarget;
        setData(prevData => {
            const newData = prevData.map(project => {
                if (project._id === id) {
                    switch (name) {
                        case name:
                            return  {...project, [name]: value};
                        default:
                          return project;
                      }
                }
                return project; 
            });
        
            return newData; 
        })
    }

    return(
        <div>
        {data && (
         <div className={s.cardContainer}>
        <ul className={s.cardContent}>

        {data && data.map(({_id, title, description, total, isShow = false, isDelete = false}) => (
            <li className={s.card} key={_id} id={_id}>
             <div className={s.buttons}>
            <button className={s.button}
              onClick={() => {
                isShow = !isShow;
                addIsToggle(_id, isShow, 'update');
                if(!isShow) {
                    console.log({id: _id, newData: {title, description}})
                }
            }}
            >
                <Update width={"20"} height={"20"}/></button>
            <button className={s.button}
            onClick={() => {
                isDelete = !isDelete;
                addIsToggle(_id, isDelete, 'delete');
                setCurrentData({_id, title}); 
                handleToggle();
                }}
            >
                <Delete width={"20"} height={"20"}/></button>
            <button className={s.button}>
              <NavLink to={`/project/settings/${_id}`}>
               <Setting width={"20"} height={"20"}/>
              </NavLink>
            </button>
            </div>
                <div>
                <p className={s.title}>Назва кошторису:</p>
                {!isShow ? (<p className={s.titleData}>{title}</p>) : 
                (<input id={_id} maxLength="20" name='title' className={s.inputTitle} value={title} disabled={!isShow} onChange={onChange} />)}
                </div>
                <div>
                <p className={s.address}>Адреса об'єкту:</p> 
                {!isShow ? (<p className={s.addressData}>{description}</p>) : 
                (<input id={_id} maxLength="30" name='description' className={s.inputAddress} value={description} disabled={!isShow} onChange={onChange} />)}
                </div>
                <div>
                <p className={s.title}>Сума кошторису:</p> <p className={s.titleData}>{total}</p>
                </div>
                <NavLink  className={s.link} to={`/project/${_id}`}>Детальніше <Line/></NavLink >
        </li>  ))

        }
      
        </ul>
        </div>   
        )}
        {toggle && (<DeleteModal data={currentData} nameComponent={"projects" } onModal={handleToggle}/>)}
       </div> 
    )
}

export default ProjectsProfile;
