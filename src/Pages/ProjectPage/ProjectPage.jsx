import { useParams, Outlet, NavLink } from 'react-router-dom';
import { useState} from 'react';
import { useGetProjectByIdQuery } from '../../redux/projectSlice/projectSlice';
import s from "./ProjectPage.module.scss";

function ProjectPage() {
    const {id} = useParams();

    const { data} = useGetProjectByIdQuery(id);
   

    return(
        <div className={s.container}>
           <div>
            <div>
                <p className={s.title}>Назва кошторису: <span>{data?.title}</span></p>
                <p className={s.description}>Адреса об'єкту: <span>{data?.description}</span></p>
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