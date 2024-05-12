import { AllDateParametr } from "../SavingBlock/CartBlock";
import React, { useEffect } from "react";
import { DataPassingInfo } from "../CalendarModalInfo";
interface ModalComponentSave {
    passData:DataPassingInfo
}
const SavingModalComponent:React.FC<ModalComponentSave> = ({passData}) => {
     localStorage.getItem('PlanSpend')    
    useEffect(()=>{
        if(passData.summ > 0){
          AllDateParametr.push(passData)
        }
        localStorage.setItem('PlanSpend', JSON.stringify(AllDateParametr));
    }, [passData])
    return null
}
export default SavingModalComponent;

    