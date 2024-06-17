import { useParams, Outlet, NavLink, useLocation  } from 'react-router-dom';
import { useState} from 'react';
import s from "./ProjectPage.module.scss";
import projects from "../../db/projects.json";

function ProjectPage() {
    const {id} = useParams();


    const projectId = projects.filter(({_id}) => _id === id);
    const project = projectId[0];
    const[data, setData] = useState(project);
    // console.log(project);

    return(
        <div className={s.container}>
           <div>
            <div>
                <p className={s.title}>Назва кошторису: <span>{data.title}</span></p>
                <p className={s.description}>Адреса об'єкту: <span>{data.description}</span></p>
            </div>
            <ul className={s.linkContainer }>
                <li>
                    <NavLink className={({ isActive }) => isActive ? `${s.link} ${s['link-min']}` : s.link} end to={`/project/${id}`}>Кошторис</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? `${s.link} ${s['link-min']}` : s.link} to={`/project/${id}/price`}>Прайс</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? `${s.link} ${s['link-min']}` : s.link} to={`/project/${id}/low`}>Знижений кошторис</NavLink>
                </li>
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