import { AllDateParametr } from "../SavingBlock/CartBlock";
import React, { useEffect } from "react";
import { DataPassingInfo } from "../CalendarModalInfo";
interface ModalComponentSave {
    passData:DataPassingInfo
    indicate:boolean,
    dateValue:string
}
const SavingModalComponent:React.FC<ModalComponentSave> = ({passData, indicate, dateValue}) => {
     localStorage.getItem('PlanSpend')    
    useEffect(()=>{
        const SignalStarting = passData.summ > 0
        if(passData.summ > 0){
          AllDateParametr.push(passData)
        }
        localStorage.setItem('PlanSpend', JSON.stringify(AllDateParametr));
    }, [passData])
    return null
}
export default SavingModalComponent;

    