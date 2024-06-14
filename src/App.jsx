import { lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from "./components/Header/Header";
import Loader from "./components/Loader/Loader";
import s from './App.module.scss';


const  Home = lazy(() => import('./Pages/Authorization/AuthorizationPage' /* webpackChunkName: "Authorization" */));

const Price = lazy(() => import('./Pages/Price/Price' /* webpackChunkName: "Price" */));
const Profile = lazy(() => import('./Pages/Profile/Profile' /* webpackChunkName: "Profile" */));
const Projects = lazy(() => import('./Pages/Projects/Projects' /* webpackChunkName: "Projects" */));
const Settings = lazy(() => import('./Pages/SettingsPage/SettingsPage' /* webpackChunkName: "Settings" */));


function App() {
  return (
    <div className={s.body}>
    <div className={s.container}>
      <ToastContainer />
      <Header/>
      <Suspense fallback={( <Loader/>)}>
      <Routes>
         <Route path="/" element={<Home />} />

         <Route path="/price" element={<Price />} />
         <Route path="/profile" element={<Profile />} />
         <Route path="/projects" element={<Projects/>} />
         <Route path="/project/settings/:id" element={<Settings/>} />
       
        <Route path="*" element={<p>NotFoundPage</p>} />
      </Routes>
      </Suspense>
    </div>
    </div>
  );
}

export default App;
