import { NavLink,  useLocation } from 'react-router-dom';
import s from './MobileMenu.module.scss';

function MobileMenu({show}) {
return (
    <div className={s.container}>
        <div className={s.content}>
        <nav>
            <ul>
            <li onClick={show}><NavLink className={({ isActive }) => `linkTest` + (isActive ? ` link-min` : '')} to='/price'>Прайс</NavLink></li>
            <li onClick={show}><NavLink className={({ isActive }) => `linkTest` + (isActive ? ` link-min` : '')} to='/profile'>Профіль</NavLink></li>
            <li onClick={show}><NavLink className={({ isActive }) => `linkTest` + (isActive ? ` link-min` : '')} to='/projects'>Кошториси</NavLink></li>
            </ul>
        </nav>
        <button className={s.button}>Вийти</button>
        </div>
    </div>
)

}

export default MobileMenu;