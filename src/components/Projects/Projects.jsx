import s from "./Projects.module.scss";
import Line from "../Icons/Line/Line";
import Update from "../Icons/Update/UpdateIcon";
import Delete from "../Icons/Delete/Delete";
function ProjectsComponent () {

    return (
        <div>
            <h1>Список кошторисів</h1>
        
        <div className={s.container}>
         
         <ul className={s.cardContainer}>
            <li className={s.card}>
            <div className={s.buttons}>
            <button className={s.button}><Update width={"24"} height={"24"}/></button>
            <button className={s.button}><Delete width={"24"} height={"24"}/></button>
            </div>
                <div>
                <p className={s.title}>Назва кошторису:</p> <p className={s.titleData}>Андрій Сихів</p>
                </div>
                <div>
                <p className={s.address}>Адреса об'єкту:</p> <p className={s.addressData}>Шевченка, 40</p>
                </div>
                <div>
                <p className={s.title}>Сума кошторису:</p> <p className={s.titleData}>70679</p>
                </div>
                <a className={s.link} href="">Детальніше <Line/></a>
            </li>
            <li className={s.card}>
            <div className={s.buttons}>
            <button className={s.button}><Update width={"24"} height={"24"}/></button>
            <button className={s.button}><Delete width={"24"} height={"24"}/></button>
            </div>
                <div>
                <p className={s.title}>Назва кошторису:</p> <p className={s.titleData}>Андрій Сихів</p>
                </div>
                <div>
                <p className={s.address}>Адреса кошторису:</p> <p className={s.addressData}>Шевченка, 40</p>
                </div>
                <div>
                <p className={s.title}>Сума кошторису:</p> <p className={s.titleData}>70679</p>
                </div>
                <a className={s.link} href="">Детальніше <Line/></a>
            </li>
            <li className={s.card}>
            <div className={s.buttons}>
            <button className={s.button}><Update width={"24"} height={"24"}/></button>
            <button className={s.button}><Delete width={"24"} height={"24"}/></button>
            </div>
                <div>
                <p className={s.title}>Назва кошторису:</p> <p className={s.titleData}>Андрій Сихів</p>
                </div>
                <div>
                <p className={s.address}>Адреса кошторису:</p> <p className={s.addressData}>Шевченка, 40</p>
                </div>
                <div>
                <p className={s.title}>Сума кошторису:</p> <p className={s.titleData}>70679</p>
                </div>
                <a className={s.link} href="">Детальніше <Line/></a>
            </li>
            <li className={s.card}>
            <div className={s.buttons}>
            <button className={s.button}><Update width={"24"} height={"24"}/></button>
            <button className={s.button}><Delete width={"24"} height={"24"}/></button>
            </div>
                <div>
                <p className={s.title}>Назва кошторису:</p> <p className={s.titleData}>Андрій Сихів</p>
                </div>
                <div>
                <p className={s.address}>Адреса кошторису:</p> <p className={s.addressData}>Шевченка, 40</p>
                </div>
                <div>
                <p className={s.title}>Сума кошторису:</p> <p className={s.titleData}>70679</p>
                </div>
                <a className={s.link} href="">Детальніше <Line/></a>
            </li>
            <li className={s.card}>
            <div className={s.buttons}>
            <button className={s.button}><Update width={"24"} height={"24"}/></button>
            <button className={s.button}><Delete width={"24"} height={"24"}/></button>
            </div>
                <div>
                <p className={s.title}>Назва кошторису:</p> <p className={s.titleData}>Андрій Сихів</p>
                </div>
                <div>
                <p className={s.address}>Адреса кошторису:</p> <p className={s.addressData}>Шевченка, 40</p>
                </div>
                <div>
                <p className={s.title}>Сума кошторису:</p> <p className={s.titleData}>70679</p>
                </div>
                <a className={s.link} href="">Детальніше <Line/></a>
            </li>
            <li className={s.card}>
            <div className={s.buttons}>
            <button className={s.button}><Update width={"24"} height={"24"}/></button>
            <button className={s.button}><Delete width={"24"} height={"24"}/></button>
            </div>
                <div>
                <p className={s.title}>Назва кошторису:</p> <p className={s.titleData}>Андрій Сихів</p>
                </div>
                <div>
                <p className={s.address}>Адреса кошторису:</p> <p className={s.addressData}>Шевченка, 40</p>
                </div>
                <div>
                <p className={s.title}>Сума кошторису:</p> <p className={s.titleData}>70679</p>
                </div>
                <a className={s.link} href="">Детальніше <Line/></a>
            </li>
           </ul>
        </div>
        </div>
    )
}

export default ProjectsComponent;