import ButtonContext from "../Context/Context";
import SpendData from "../Data/SpendData";
import { SpendItem } from "Data/SpendData";
import React, { useContext, useEffect, useState } from "react";
import { WholeAlgoritm } from "../Header/Statistic/StatisticWeek";



interface SpendBoxProps {
    passInfo:SpendItem | undefined;
    value:number | string | null;
  }

 const ForChangeSpendButtom:React.FC<SpendBoxProps> = ({passInfo, value}) =>{
    
    const { setRefresh } = useContext(ButtonContext)
    const { setPassSignal } = useContext(ButtonContext)

    const [time, setTime] = useState(false);
    
      useEffect(() => {
        //let numberFilter = !isNaN(passInfo?.summ)
   
       
 
        const FilterValue = passInfo?.name !== 'Add spend' && passInfo !== undefined

          const timeoutId = setTimeout(() => {
              setTime(true);
              if(value){
                WholeAlgoritm()
                setPassSignal(true)
              FilterValue ?  setRefresh(value) : null
              
              if(passInfo !== undefined){
              const ID = passInfo ? passInfo.id - 1 : undefined;
             const ClearSumm = value
             const stringValue: string = String(ClearSumm);
              
            const FilterClearSumm = parseInt(stringValue)
            
            if(ID !== undefined && ClearSumm !== null){    
                SpendData[ID].summ += FilterClearSumm
              }
          }
            localStorage.setItem('data', JSON.stringify(SpendData))    
                 
          }     
          
          }, 100);
      
          return () => clearTimeout(timeoutId); // Clear timeout when component unmounts or time becomes true
      }, [time]);
      
    
      
      if (time) {
          setTime(false);
      }
    
   

    return(
<div></div>
      )

}
export default ForChangeSpendButtom

