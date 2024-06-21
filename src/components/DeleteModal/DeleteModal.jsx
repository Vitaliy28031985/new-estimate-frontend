import { useParams  } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDeletePriceMutation} from "../../redux/price/priceApi";
import { useDeleteProjectMutation } from '../../redux/projectSlice/projectSlice';
import {useDeletePositionMutation} from '../../redux/position/positionApi';
import {useDeleteEstimateMutation} from '../../redux/estimate/estimateApi';
import {useDeleteProjectPriceMutation} from '../../redux/projectPrice/projectPriceApi';
import {useDeleteMaterialMutation} from "../../redux/material/materialApi";
import {projectsApi} from "../../redux/projectSlice/projectSlice";
import s from "./DeleteModal.module.scss";

function DeleteModal({data, nameComponent, onModal}) {
    const {id} = useParams();
    const dispatch = useDispatch();
    
    const [deletePrice] = useDeletePriceMutation();
    const [deleteProject] = useDeleteProjectMutation();
    const [deleteEstimate] = useDeleteEstimateMutation();
    const [deletePosition] = useDeletePositionMutation();
    const [deleteProjectPrice] = useDeleteProjectPriceMutation();
    const [deleteMaterial] = useDeleteMaterialMutation();

    const deleteFunction = async () => {
        // Загальний прайс
        if(nameComponent === "price") {
            await deletePrice(data._id);
            toast(`"${data.title}" успішно видалена!`);
            onModal();
            return;
        }
      

        //прайс кошторису
        if(nameComponent === "deleteProjectPrice") {
            const deleteProjectPriceData = { idPro: id, idPrice: data.id}; 
            await deleteProjectPrice(deleteProjectPriceData);
            dispatch(projectsApi.util.resetApiState());
            toast(`"${data.title}" успішно видалена!`);
            onModal();
            return;
        }

        if(nameComponent === "projects") {
                 
            await deleteProject(data?._id);
            toast(`"${data.title}" успішно видалена!`);              
            onModal();
            return; 
        }

        //Видалення таблиць і рядків

        if(nameComponent === "deleteEstimate") {
            
            const deleteEstimateData = {idPro: id, idEst: data.id}
            await deleteEstimate(deleteEstimateData);
            dispatch(projectsApi.util.resetApiState());
            toast(`"${data.title}" успішно видалена!`);
            onModal();
            return;
        }

        if(nameComponent === "deletePosition") {

            const deletePositionData = {idPro: id, idEst: data.estimateId, idPos: data.positionId}
            await deletePosition(deletePositionData);
            dispatch(projectsApi.util.resetApiState());
            toast(`"${data.title}" успішно видалена!`);
            onModal();
            return;
        }
        // видалення матеріалів
        if(nameComponent === "deleteMaterial") {
            
            const deleteMaterialData = {idPro: id, idMat: data.id};
            await deleteMaterial(deleteMaterialData);
            dispatch(projectsApi.util.resetApiState());
            toast(`"${data.title}" успішно видалена!`);
            onModal();
            return; 
        }

        // видалення авансу

        if(nameComponent === "deleteAdvance") {
            toast(`"${data.comment}" успішно видалена!`);
            const deleteAdvance = {projectId: id, advanceId: data.id};
            console.log(deleteAdvance);
            onModal();
            return; 
        }
    }

    return (
    
          <div className={s.container}>
          
          {data.title && ( <h4>Ви бажаєте видалити "{data.title}"?</h4>)}
          {data.comment && (<h4>Ви бажаєте видалити "{data.comment}"?</h4>)}
              

            <div className={s.buttonsContainer}>
                <button onClick={deleteFunction} className={s.buttonDelete}>Так</button>
                <button onClick={onModal} className={s.button}>Ні</button>
            </div>             
           
          </div>
    //   
    )
}

export default DeleteModal;
