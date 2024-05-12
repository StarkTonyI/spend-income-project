import React, { useEffect, useState } from 'react';
import ResultSucsses from './Result/ResultSucsses';
import CalendarComponent from './CalendarComponent';
import SavingModalComponent from './SavingCalendarData.tsx/SavingCalendarModal';
import './CalendarModal.css'
import  Button  from '../../../Button/ButtonClick/Button';

  interface DateValue {
    dateValue:string
    passingIndicate:boolean
    mainpulateIndicate: React.Dispatch<React.SetStateAction<boolean>>;
  }
  export interface DataPassingInfo{
    id:number
    summ:number
    cause:string  
    date:string | number
  }


const CalendarModalInfo:React.FC<DateValue> = ({dateValue, passingIndicate, mainpulateIndicate}) => {
    const [showResult, setShowResult] = useState(false);
    const [dateTakeInfo, setDateTakeInfo] = useState(false)
   const [makeSecondEntrance,setMakeSecondEntrance] = useState(false)
 
 const modal: HTMLElement | null = document.querySelector('.modal-block') as HTMLElement | null;

    const [passData, setPassData] = useState<DataPassingInfo>({summ:0, cause:'', id:1, date:''})
   
    useEffect(()=>{
      if (modal) {
        modal.style.display = 'block';
        //overlay.style.display = 'block';
   
      if(dateValue){
          // Initial height and target height
          const initialHeight = modal.offsetHeight;
          const targetHeight = initialHeight + 400; // Increase height by 100px
          setDateTakeInfo(true) 
          // Interval duration and increment value
          const intervalDuration = 10; // milliseconds
          const increment = 2; // pixels
        
          let currentHeight = initialHeight;
        
          // Define the interval function
          const increaseHeight = setInterval(function() {
            currentHeight += increment;
            modal.style.height = currentHeight + 'px';
        
            // Check if target height is reached
            if (currentHeight >= targetHeight) {
              clearInterval(increaseHeight); // Stop the interval
            }
          }, intervalDuration);
        };
      }

    }, [dateValue, modal])
 
 

    function OffAllDateModal(){
      setShowResult(false)
      modal ? modal.style.display = 'none' : null
    }
    const ShowResult = () => {
      if(!passingIndicate){
      setShowResult(true);
      setDateTakeInfo(false);
      mainpulateIndicate(false)
      showResult ? OffAllDateModal() : null
      }
    }

    function SmartStability(){
      if(dateValue){
        setMakeSecondEntrance(true)
      }
      if(showResult){
        setMakeSecondEntrance(true)
        setTimeout(()=>{
          setMakeSecondEntrance(false)
        },50)
      }
    }
      
    useEffect(()=>{
      SmartStability()
    }, [showResult, dateValue])

return <>
<div id="modal-block" className="modal-block">
   {makeSecondEntrance && !passingIndicate && <CalendarComponent dateValue={dateValue} clickOkay={showResult} setPassData={setPassData}/>}
   {showResult && !passingIndicate && <ResultSucsses ResultDate={dateValue}/>}
      <SavingModalComponent passData={passData}/>
      <Button onClick={ShowResult}/>
    </div>
  
</>
}
  
  
;
export default CalendarModalInfo;