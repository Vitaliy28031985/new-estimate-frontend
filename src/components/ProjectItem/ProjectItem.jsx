import { useParams  } from 'react-router-dom';
import { useState} from 'react';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Add from "../Icons/Add/Add"
import Update from "../Icons/Update/UpdateIcon";
import UpdateOk from "../Icons/UpdateOk/UpdateOk";
import Delete from "../Icons/Delete/Delete";
import Modal from "../Modal/Modal";
import AddEstimate from '../AddModals/AddEstimate/AddEstimate';
import AddPosition from "../AddModals/AddPosition/AddPosition";
import DeleteModal from '../DeleteModal/DeleteModal';
import s from "./ProjectItem.module.scss";

import projects from "../../db/projects.json";

function ProjectItem() {
    const {id} = useParams();
    const projectId = projects.filter(({_id}) => _id === id);
    const project = projectId[0];
    const[data, setData] = useState(project);
    const [currentData, setCurrentData] = useState({});
    const [deleteEstimate, setDeleteEstimate] = useState(false);
    const [deletePosition, setDeletePosition] = useState(false);
    const [operations, setOperations] = useState('');
    const [showEstimateAdd, setShowEstimateAdd ] = useState(false);
    const [showPositionAdd, setShowPositionAdd] = useState(false);
    

    const handleToggle = (operation, data) => {
   
      if(operation === "estimate" || operations === "estimate") {
        setShowEstimateAdd(toggle => !toggle); 
          setOperations(operation);
         return;
      }
      if(operation === "position" || operations === "position") {
          setShowPositionAdd(toggle => !toggle); 
          setOperations(operation);
          
          if(data) {
            if(data.title !== undefined) {
             toast(`Позицію ${data.title} успішно додано`)
            console.log(data)
          }  
         return;
      }   
  }
  if(operation === "deleteEstimate" || operations === "deleteEstimate") {
    setDeleteEstimate(toggle => !toggle); 
    setOperations(operation);
   return; 
  }
  if(operation === "deletePosition" || operations === "deletePosition") {
    setDeletePosition(toggle => !toggle); 
    setOperations(operation);
   return; 
  }
  }
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

const generatePdf = () => {
  if (data) {
    const content = [
      { text: `Назва об'єкту:          ${data?.title}`, fontSize: 25 },
      { text: `Адреса:                                                 ${data?.description}`, fontSize: 14, marginTop: 10 },
    ];

    data.estimates.forEach((estimate) => {
      content.push(
        { text: estimate?.title, fontSize: 16, bold: true, marginTop: 30, marginBottom: 10, marginLeft: 200},
        {
          table: {
            headerRows: 1,
            widths: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto'],
            body: [
              ['№ з/п.', 'Назва', 'Одиниця', 'Кількість', 'Ціна в грн.', 'Сума в грн.'],
              ...(estimate?.positions?.map(
                ({ title, unit, price, number, result  }, index) => [
                  index + 1,
                  title || '',        
                  unit || '',          
                  number || '',
                  price || '',        
                  result || '',       
                ]
              ) || []),
              [{}, {}, {}, {}, 'Всього:', estimate?.total],
              
            ],
          },
          layout: 'lightHorizontalLines',
          style: 'tableExample', 

        }
      );
    });
    content.push({ text: `Загальна сума:                            ${data?.total}`, fontSize: 30, marginTop: 30},)
    if(data?.discount) {
    content.push({ text: `Знижка:                                            ${data?.discount}`, fontSize: 30, marginTop: 30},)
    }
    content.push({ text: `Витрачено на матеріали:          ${data?.materialsTotal}`, fontSize: 30, marginTop: 30},)
    content.push({ text: `Аванс:                                             ${data?.advancesTotal}`, fontSize: 30, marginTop: 30},)
    content.push({ text: `До оплати:                                    ${data?.general}`, fontSize: 30, marginTop: 30},)
    const styles = {
      tableExample: {
        margin: [0, 5, 0, 15],
        fontSize: 12,                   
        color: '#333',           
      },
    };
    const pdfDoc = {
      content,
      styles
    };

    pdfMake.createPdf(pdfDoc).download(`${data?.title}.pdf`);
  }
 
};


const addIsToggle = (id, currentIsShow, name) => {
  setData(prevData => {
      const newData = { ...prevData }; 
      const newEstimates = newData.estimates.map(estimate => {
          const newPositions = estimate.positions.map(position => {
              if (position._id === id) {
                if(name === 'update') {
                  return { ...position, isShow: currentIsShow }; 
                }
                if(name === 'delete') {
                  return { ...position, isDelete: currentIsShow };
              }
              }
              return position;
          });
          return { ...estimate, positions: newPositions }; 
      });
      newData.estimates = newEstimates; 
      return newData; 
  });
};

const onChange = (e) => {
  const { name, value, id } = e.currentTarget;
  setData(prevData => {
      const newData = { ...prevData }; 
      const newEstimates = newData.estimates.map(estimate => {
          const newPositions = estimate.positions.map(position => {
              if (position._id === id) {
                  switch (name) {
                      case name:
                          return  {...position, [name]: value};
                      default:
                        return position;
                    }
                  }
              return position;
          });
          return { ...estimate, positions: newPositions }; 
      });
      newData.estimates = newEstimates; 
      return newData; 
  }); 
}

    return (
        <>
        {/* {error ? (<ForbiddenPage/>) :  */}
      {/* (  */}
        <div>

        <div className={s.buttonAddContainer}>
        <button className={s.createPdfFileButton} 
        onClick={generatePdf}
        >Створити PDF файл</button>
       {/* {userRole && ( */}
         <button type='button' 
         className={s.createPdfFileButton} 
         onClick={() => handleToggle("estimate")}
         >Додати таблицю</button>
       {/* )} */}
       
       </div>

       
        {data && (
          <>
        
            {data.estimates && data.estimates.map(item => (
              <div key={item._id}>
                <div className={s.buttonAddContainer}>
                <p className={s.titleTable}>{item.title}</p>
                {/* {userRole && ( */}
                    <>
                 <button type='button' className={s.buttonAddTitle} 
                 
                 onClick={() => {
                  handleToggle("deleteEstimate");
                  setCurrentData({id: item?._id, title: item?.title})
                  // onDeleteEstimate(data?._id, item?._id)
                }}
                 >
                  <Delete width={"24"} height={"24"}/>
                  </button>
                  <button className={s.buttonUpdateEstimate}
                 
                //   onClick={() => updateEstimate(data?._id, item?._id, item?.title)}
                  >
                    <Update width='28' height='28'/>
                      </button>
                </>
             {/* )} */}
                
                
                </div>     
                
                <table className={s.iksweb}>
                  <tbody>
                  <tr className={s.titleRow}>
             <td className={s.oneRow}>№ з/п.</td>
                   <td className={s.twoRow}>Назва 
                   {/* {userRole && ( */}
                   <button type='button' 
                    onClick={() => handleToggle('position', {id: item._id})}
                //    onClick={() => data && item._id && handleTogglePosition(item._id, data._id)}
                    className={s.buttonAdd}>
                   <Add width={"24"} height={"24"}/>
                  </button> 
                  {/* )} */}
                   </td>
                   <td className={s.threeRow}><p className={s.threeRowTitleText}>Одиниця</p></td>
                   <td className={s.threeRow}><p className={s.threeRowTitleText}>Кількість</p></td>
                   <td className={s.threeRow}><p className={s.threeRowTitleText}>Ціна в грн.</p></td>
                   <td className={s.threeSix}>Сума в грн.</td>
               </tr>
    
                    {item.positions &&
                      item.positions.map(({ _id, id, title, unit, price, number, result, isShow = false, isDelete = false }, index) => (
                  <tr key={_id} className={s.dataRow}>
                  <td className={s.oneRow}>
                    {index + 1}
                    {/* {userRole && ( */}
                      <button  
                    className={s.buttonUpdate}
                    onClick={() => {
                      isShow = !isShow;
                      addIsToggle(_id, isShow, 'update');
                      if(!isShow) {
                        console.log(data._id, item._id, id, {title, unit, number, price})
                        //  handleSubmit(data._id, item._id, id, {title, unit, number, price}); 
                      }
                      }}
                    >
                      {isShow ? (<UpdateOk width='22' height='22'/>) :
                      (<Update width='22' height='22'/>)
                      }
                    
                    </button> 
                    {/* )} */}
                   
                    </td>
                  <td>
                  {!isShow ? 
                  (<p>{title}</p>) : 
                  (
                  <input type='text' id={_id} name='title' className={s.inputTitle} value={title} disabled={!isShow} 
                    onChange={onChange}
                    />
                  )
                  }</td>                 
                  <td className={s.threeRow}>{!isShow ? 
                  (<p>{unit}</p>) : 
                  (
                  <input type='text' id={_id} name='unit'  className={s.input} value={unit} disabled={!isShow} 
                    onChange={onChange}
                    />
                  )
                  }</td>
                  <td className={s.threeRow}>
                  {!isShow ? 
                  (<p>{number}</p>) :
                  (<input type='number' id={_id} name='number' className={s.input} value={number} disabled={!isShow}
                   onChange={onChange}
                   />)}
                   </td>
                 
                  <td className={s.fiveRow}>
                      {!isShow ? 
                  (<p>{price}</p>) :
                  (<input type='number' id={_id} name='price' className={s.input} value={price} disabled={!isShow} 
                    onChange={onChange}
                    />)
                  }</td>
                  <td className={s.threeSix}>
                    {result}
                    {/* {userRole && ( */}
                     <button className={s.buttonDeletePosition} 
                    onClick={() => {
                      isDelete = !isDelete;
                      console.log(_id, isDelete)
                      handleToggle("deletePosition");
                      setCurrentData({estimateId: _id, positionId: id, title})
                      // addIsToggle(_id, isDelete, 'delete');
                    }
                    }
                    >
                      <Delete width={"20"} height={"20"}/>
                    </button>  
    
                   {/* )} */}
                                    
                    </td>
                        </tr>
                      ))}
    
                    <tr className={s.titleRow}>
                      <td colSpan='5'>Всього:</td>
                      <td className={s.threeSix}>{item.total}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
          </>
        )}
    
        <div className={s.total}>
          <p>Загальна сума: </p>
          {data && <p>{data.total}</p>}
        </div>
    
        <div className={s.total}>
        {data?.discount && (
        <>
        <p>Знижка на роботу:</p>
        <p>{data?.discount}</p> 
          </>)}
        </div> 
    
        
          <div className={s.total}>
            <p>Витрачено на матеріали:</p>
            {data?.materialsTotal && (
          <p>{data?.materialsTotal}</p> )}
        </div> 
       
        
           <div className={s.total}>
            <p>Аванс:            </p>
            {data?.advancesTotal && (
          <p>{data?.advancesTotal}</p>)}
        </div>
        
        
         <div div className={s.totalGeneral}>
          <p>До оплати:</p>
          {data?.general && (
          <p>{data?.general}</p>)}
        </div> 
        {deleteEstimate && (<DeleteModal data={currentData} nameComponent={"deleteEstimate"} onModal={handleToggle}/>)}
        {deletePosition && (<DeleteModal data={currentData} nameComponent={"deletePosition"} onModal={handleToggle}/>)}
        {showEstimateAdd && (<Modal onModal={handleToggle}><AddEstimate onModal={handleToggle}/></Modal>)}
        {showPositionAdd && (<Modal onModal={handleToggle}><AddPosition onModal={handleToggle}/></Modal>)}
       
{/*        
        {showPosition && (
         <Modal onModal={handleTogglePosition}><AddPosition isShowModal={handleTogglePosition} add={addFunction} /></Modal> 
        )}
    
         {updateEstimateModal && (
         <Modal onModal={handleToggleUpdateEstimate}><UpdateEstimate isShowModal={handleToggleUpdateEstimate} idData={newUpdateEstimate} /></Modal> 
        )}
    
        {showEstimate && (<Modal onModal={handleToggleEstimate}><AddEstimate idData={id} isShowModal={handleToggleEstimate}/></Modal>)}
         */}
        
        
      </div>
      {/* ) */}
    {/* } */}
    </>
        
      );
    
}
export default ProjectItem;