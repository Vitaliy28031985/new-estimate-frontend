import { useParams, Outlet, NavLink, useLocation  } from 'react-router-dom';
import s from "./ProjectPage.module.scss";

function ProjectPage() {
    const {id} = useParams();

    return(
        <div className={s.container}>
           <div>
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