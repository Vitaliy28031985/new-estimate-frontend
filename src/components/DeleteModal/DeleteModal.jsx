import { useParams  } from 'react-router-dom';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from "./DeleteModal.module.scss";

function DeleteModal({data, nameComponent, onModal}) {
    const {id} = useParams();
    

    const deleteFunction = () => {
        // Загальний прайс
        if(nameComponent === "price") {
            toast(`"${data.title}" успішно видалена!`);
            console.log(data)
            onModal();
            return;
        }


        //прайс кошторису
        if(nameComponent === "deleteProjectPrice") {
            toast(`"${data.title}" успішно видалена!`);
            const deleteProjectPrice = { ProjectId: id, priceId: data.id};  
            console.log(deleteProjectPrice)
            onModal();
            return;
        }

        //Видалення таблиць і рядків

        if(nameComponent === "deleteEstimate") {
            toast(`"${data.title}" успішно видалена!`);
            const deleteEstimate = {projectId: id, estimateId: data.id}
            console.log(deleteEstimate)
            onModal();
            return;
        }

        if(nameComponent === "deletePosition") {
            toast(`"${data.title}" успішно видалена!`);
            const deletePosition = {projectId: id, estimateId: data.estimateId, positionId: data.positionId}
            console.log(deletePosition)
            onModal();
            return;
        }
    }

    return (
    
          <div className={s.container}>
          
            <h4>Ви бажаєте видалити "{data.title}"?</h4>  

            <div className={s.buttonsContainer}>
                <button onClick={deleteFunction} className={s.buttonDelete}>Так</button>
                <button onClick={onModal} className={s.button}>Ні</button>
            </div>             
           
          </div>
    //   
    )
}

export default DeleteModal;