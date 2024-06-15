
import s from "./DeleteModal.module.scss";

function DeleteModal({data, nameComponent, onModal}) {

    console.log(data)

    const deleteFunction = () => {
        if(nameComponent === "price") {
            console.log("delete price");
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