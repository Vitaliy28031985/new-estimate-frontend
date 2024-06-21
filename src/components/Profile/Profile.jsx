import { useDispatch } from 'react-redux';
import {authApi} from "../../redux/auth/authApi";
import ProjectsProfile from './ProjectsProfile/ProjectsProfile';
import ProfileInfo from './ProfileInfo/ProfileInfo';

import s from "./Profile.module.scss";


function ProfileComponent() {
    const dispatch = useDispatch();
    dispatch(authApi.util.resetApiState()); 
  
    return(
    <div>
        <h1>Профіль користувача</h1>
        <div className={s.container}>
       <ProfileInfo/>
        <ProjectsProfile/>
        </div>
       </div>
    )

}

export default ProfileComponent;