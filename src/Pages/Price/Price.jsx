import { useState } from 'react';
import Modal from "../../components/Modal/Modal";
import PriceComponent from '../../components/PriceComponent/PriceComponent';
import AddProject from "../../components/AddModals/AddProject/AddProject";
import s from "./Price.module.scss";

function Price() {
    const [toggle, setToggle] = useState(true);

    const handleToggle = () => {
        setToggle(toggle => !toggle);
    }
    
    return (
        <div className={s.container}>
            <PriceComponent/>
            {/* <Modal onModal={handleToggle}><AddProject/></Modal> */}
        </div>
    )
}

export default Price;