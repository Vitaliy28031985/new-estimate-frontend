import { useParams  } from 'react-router-dom';
import { useState} from 'react';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import s from "./LowProjectItem.module.scss";
import { useGetProjectByIdQuery } from '../../redux/projectSlice/projectSlice';
import roundingNumberFn from "../../helpers/roundingNumberFn";

function LowProjectItem() {
    const {id} = useParams();
    const { data: project} = useGetProjectByIdQuery(id);
    const[data, setData] = useState(project);
   
    

    pdfMake.vfs = pdfFonts.pdfMake.vfs;

const generatePdf = () => {
  if (data) {
    const content = [
      { text: `Назва об'єкту:          ${data?.title}`, fontSize: 25 },
      { text: `Адреса:                                                 ${data?.description}`, fontSize: 14, marginTop: 10 },
    ];

    data.lowEstimates.forEach((estimate) => {
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
    content.push({ text: `Загальна сума:                       ${data?.lowTotal}`, fontSize: 30, marginTop: 30},)
    if(data?.discount) {
    }
    content.push({ text: `Витрачено на матеріали:          ${data?.materialsTotal}`, fontSize: 30, marginTop: 30},)
    content.push({ text: `Аванс:                                             ${data?.advancesTotal}`, fontSize: 30, marginTop: 30},)
    content.push({ text: `До оплати:                                ${data?.lowGeneral}`, fontSize: 30, marginTop: 30},)
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


    return (
        <>
        {/* {error ? (<ForbiddenPage/>) :  */}
      {/* (  */}
        <div>

        <div className={s.buttonAddContainer}>
        <button className={s.createPdfFileButton} 
        onClick={generatePdf}
        >Створити PDF файл</button>
            
       </div>

       
        {data && (
          <>
        
            {data.lowEstimates && data.lowEstimates.map(item => (
              <div key={item._id}>
                <div className={s.buttonAddContainer}>
                <p className={s.titleTable}>{item.title}</p>
                
                </div>     
                
                <table className={s.iksweb}>
                  <tbody>
                  <tr className={s.titleRow}>
             <td className={s.oneRow}>№ з/п.</td>
                   <td className={s.twoRow}>Назва </td>
                   <td className={s.threeRow}><p className={s.threeRowTitleText}>Одиниця</p></td>
                   <td className={s.threeRow}><p className={s.threeRowTitleText}>Кількість</p></td>
                   <td className={s.threeRow}><p className={s.threeRowTitleText}>Ціна в грн.</p></td>
                   <td className={s.threeSix}>Сума в грн.</td>
               </tr>
    
                    {item.positions &&
                      item.positions.map(({ _id, title, unit, price, number, result}, index) => (
                  <tr key={_id} className={s.dataRow}>
                  <td className={s.oneRow}>
                    {index + 1}
                                     
                    </td>
                  <td><p>{title}</p></td>                 
                  <td className={s.threeRow}><p>{unit}</p> </td>
                  <td className={s.threeRow}><p>{number}</p></td>
                 
                  <td className={s.fiveRow}><p>{price}</p></td>
                  <td className={s.threeSix}>{roundingNumberFn(result)}</td>
                        </tr>
                      ))}
    
                    <tr className={s.titleRow}>
                      <td colSpan='5'>Всього:</td>
                      <td className={s.threeSix}>{roundingNumberFn(item.total)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
          </>
        )}
    
        <div className={s.total}>
          <p>Загальна сума: </p>
          {data && <p>{roundingNumberFn(data.lowTotal)}</p>}
        </div>        
          <div className={s.total}>
            <p>Витрачено на матеріали:</p>
            {data?.materialsTotal && (
          <p>{roundingNumberFn(data?.materialsTotal)}</p> )}
        </div> 
       
        
           <div className={s.total}>
            <p>Аванс:            </p>
            {data?.advancesTotal && (
          <p>{roundingNumberFn(data?.advancesTotal)}</p>)}
        </div>
        
        
         <div div className={s.totalGeneral}>
          <p>До оплати:</p>
          {data?.lowGeneral && (
          <p>{roundingNumberFn(data?.lowGeneral)}</p>)}
        </div>  
      </div>

    </>
        
      );
    
}
export default LowProjectItem;