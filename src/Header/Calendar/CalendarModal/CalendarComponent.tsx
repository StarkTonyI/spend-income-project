import './CalendarModal.css'
import React, { useEffect, useState } from "react"
import { DataPassingInfo } from './CalendarModalInfo'
import { AllDateParametr } from '../CalendarModal/SavingBlock/CartBlock'
interface DateValueComponent {
    dateValue:string | number
    clickOkay:boolean
    setPassData:React.Dispatch<React.SetStateAction<DataPassingInfo>>
}

const CalendarComponent:React.FC<DateValueComponent> = ({dateValue, clickOkay, setPassData}) => {
    
    const [saveSumm, setSaveSumm] = useState<number>(0);
    const [saveCause, setSaveCause] = useState('');
    let value:number
    useEffect(()=>{
        AllDateParametr.map((val)=>{
            value = val.id + 1
        })
        if(clickOkay){
            setPassData({
                id:value,
                summ:saveSumm,
                cause:saveCause,
                date:dateValue
            })      
          }
          
    }, [clickOkay])
  
    return(
        <div>
        <p className='date'>{dateValue}</p>
        <div className="inputbox">
    <input type="text" required 
    onChange={(event)=>setSaveCause(event.target.value)}/>
        <span>For</span>
        <i></i>
            </div>
         
            <div className="inputbox">
    <input type="text" required 
    onChange={(event)=>setSaveSumm(parseInt(event.target.value))}/>
        <span>Summ</span>
        <i></i>
            </div>
            </div>
    )
}
export default CalendarComponent