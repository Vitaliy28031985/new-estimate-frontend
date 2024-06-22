import { useParams, Outlet, NavLink,  useNavigate  } from 'react-router-dom';
import { useState, useEffect} from 'react';
import { useGetProjectByIdQuery, useGetProjectLowByIdQuery } from '../../redux/projectSlice/projectSlice';
import s from "./ProjectPage.module.scss";

function ProjectPage() {
    const {id} = useParams();
    const navigate = useNavigate();   
    const { data: project} = useGetProjectByIdQuery(id);
    const { data: projectSmall} = useGetProjectLowByIdQuery(id);
   
    const[data, setData] = useState(project);
    const [dataLow, setDataLow] = useState(projectSmall);
  
    
    useEffect(() => {
        setData(project);
        if(projectSmall) {
            setDataLow(projectSmall) 
        } 
   
          if (!project?.estimates?.length) {
            navigate(`/project/${id}/low`);
        } 
        else{
            navigate(`/project/${id}`);
        }
        
          }, [project, dataLow]);

         

    return(
        <div className={s.container}>
           <div>
            <div>
                <p className={s.title}>Назва кошторису: <span>{data?.title}</span></p>
                <p className={s.description}>Адреса об'єкту: <span>{data?.description}</span></p>
            </div>
            <ul className={s.linkContainer }>
                
                {data?.estimates && (
                 <li>
                    <NavLink className={({ isActive }) => isActive ? `${s.link} ${s['link-min']}` : s.link} end   to={`/project/${id}`}>Кошторис</NavLink>
                </li>   
                )}
                
                <li>
                    <NavLink className={({ isActive }) => isActive ? `${s.link} ${s['link-min']}` : s.link} to={`/project/${id}/price`}>Прайс</NavLink>
                </li>
                {dataLow?.lowEstimates.length !== 0 && (
                <li>
                    <NavLink className={({ isActive }) => isActive ? `${s.link} ${s['link-min']}` : s.link} to={`/project/${id}/low`}>{!project?.estimates?.length ? "Кошторис" : "Знижений кошторис"}</NavLink>
                </li>
                )} 
                   
                
                <li>
                    <NavLink className={({ isActive }) => isActive ? `${s.link} ${s['link-min']}` : s.link} to={`/project/${id}/materials`}>Матеріали</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? `${s.link} ${s['link-min']}` : s.link} to={`/project/${id}/advances`}>Аванс</NavLink>
                </li>
            </ul>
           </div>

            <Outlet />
        </div>
    )
}
export default ProjectPage;


// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import s from './YourStyles.module.scss';

// function YourComponent({ id, someCondition }) {
//     return (
//         <li>
//             <NavLink 
//                 className={({ isActive }) => isActive ? `${s.link} ${s['link-min']}` : s.link}
//                 to={`/project/${id}`}
//                 end={someCondition} // тут ваш тернарний оператор для визначення значення `end`
//             >
//                 Кошторис
//             </NavLink>
//         </li>
//     );
// }

// export default YourComponent;
