import { useState, useEffect } from 'react';
import { useParams  } from 'react-router-dom';
import AddProjectPrice from '../AddModals/AddProjectPrice/AddProjectPrice';
import Modal from '../Modal/Modal';
import Add from "../Icons/Add/Add";
import Update from "../Icons/Update/UpdateIcon";
import UpdateOk from "../Icons/UpdateOk/UpdateOk";
import Delete from "../Icons/Delete/Delete";
import DeleteModal from "../DeleteModal/DeleteModal";
import s from "./ProjectPrice.module.scss";

import projects from "../../db/projects.json";

function ProjectPrice() {
    const {id} = useParams();
    const projectId = projects.filter(({_id}) => _id === id);
     const price = projectId[0].price;
    const [currentData, setCurrentData] = useState({});
    const [data, setData] = useState(price);
    const [operations, setOperations] = useState('');
    const [filter, setFilter] = useState('')
    const [showModal, serShowModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);

   
  
    
    const filterChange = e => setFilter(e.target.value);

    const normalizeFilter = filter.toLowerCase();

    const filteredContacts =  data?.filter(item =>
    item.title.toLowerCase().includes(normalizeFilter)) ?? [];

    const handleToggle = (operation) => {
        if(operation === "price" || operations === "price") {
            serShowModal(toggle => !toggle); 
            setOperations(operation);
           return;
        }
        if(operation === "deleteProjectPrice" || operations === "deleteProjectPrice") {
            setDeleteModal(toggle => !toggle); 
            setOperations(operation);
           return;
        }
        
    }
    

    const addIsToggle = (id, currentIsShow, name) => {
        setData(prevData => {
            const newData = prevData.map(price => {
                if (price._id === id) {
                    if(name === 'update') {
                        return { ...price, isShow: currentIsShow };
                    }
                    if(name === 'deleteProjectPrice') {
                        return { ...price, isDelete: currentIsShow };
                    }
                }
                return price; 
            });
        
            return newData; 
        });
    };
    
    const onChange = (e) => {
        const { name, value, id } = e.currentTarget;
        setData(prevData => {
            const newData = prevData.map(price => {
                if (price._id === id) {
                    switch (name) {
                        case name:
                            return  {...price, [name]: value};
                        default:
                          return price;
                      }
                }
                return price; 
            });
        
            return newData; 
        });
    }
    

    return(
        <div>
             <div className={s.inputContainer}>
                    <input type="text" maxLength="20" name="title" id="title"
                    onChange={filterChange} value={filter}  
                    placeholder="Введіть сюди що Ви шукаєте" />
            </div>

            <div className={s.titleContainer}>
            <h3>Прайс робіт</h3>
            <button onClick={() => handleToggle("price")} className={s.buttonAdd}><Add width={"27"} height={"27"}/></button>
            </div> 
            
         <table className={s.iksweb}>
	<tbody>
		<tr className={s.tableMin}>
			<td className={s.rowOne}> <p>Найменування робіт</p>
            
            </td>
			<td className={s.twoRow}>Ціна за одиницю в грн.</td>
		</tr>
        {data && filteredContacts?.map(({_id, title, price, isShow = false, isDelete = false}) => (
           
        <tr key={_id}>
             
			<td className={s.rowOne} >
                
                   <button  
                  className={s.buttonUpdate}
                  onClick={() => {
                    isShow = !isShow;
                    addIsToggle(_id, isShow, 'update');
                    if(!isShow) {
                        console.log({id: _id, newData: {title, price}})
                    //    mutate({id: _id, newData: {title, price}});
                    }
                    }}
                  >
                    {isShow ? (<UpdateOk width='22' height='22'/>) :
                    (<Update width='22' height='22'/>)
                    }
                  
                  </button>
                  {!isShow ? 
                  (<p className={s.inputTitle}>{title}</p>) :
                  (<input id={_id} name='title' className={s.inputTitle} value={title} disabled={!isShow} onChange={onChange} />)
                  }
                </td>
			<td className={s.twoRow}> 
            {!isShow ? 
            (<p className={s.inputPrice}>{price}</p>) :
            (<input id={_id} name='price' className={s.inputPrice} value={price} disabled={!isShow} onChange={onChange} />) 
            }
               <button className={s.buttonDelete} onClick={() => {
                isDelete = !isDelete;
                addIsToggle(_id, isDelete, 'deleteProjectPrice');
                setCurrentData({id: _id, title}); 
                handleToggle("deleteProjectPrice");
            }}>
                <Delete width={"24"} height={"24"}/>
                
                </button>
                                
            </td>
          
		</tr>    
        ))}
		
	</tbody>
</table>
{deleteModal && (<DeleteModal data={currentData} nameComponent={"deleteProjectPrice"} onModal={handleToggle}/>)}
{showModal && (<Modal onModal={handleToggle}><AddProjectPrice onModal={handleToggle}/></Modal>)}


        </div>
    )
}

export default ProjectPrice;