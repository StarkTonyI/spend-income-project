import React from "react";
import DayLimit from "./LimitsOfDay/DayLimit";
import WeekLimit from "./LimitsOfDay/WeekLimit";
import MonthLimit from "./LimitsOfDay/MonthLimit";
interface Notificatiion {
        limitDay:string | number
        limitWeek:string | number 
        limitMonth:string | number
        setIsModalNotification:React.Dispatch<React.SetStateAction<boolean>>;
    }

const ModalWindowNotification:React.FC<Notificatiion> = ({limitDay, limitWeek, limitMonth, setIsModalNotification}) => {
    let SpendEveryDay = localStorage.getItem('EveryDay');
    let ParseSpendEveryDay = SpendEveryDay ? JSON.parse(SpendEveryDay) : null
        function MapArrayForCountSpend(SavingDate:any){
             let TimeStart = ParseSpendEveryDay.filter((value:any) => 
            value.calendarDay >= SavingDate.day)
             let summ = 0;
             TimeStart.map((item:any)=>{
                 summ += item.spend
             })
             return summ
        }
        return <>
        <DayLimit limitDay={limitDay} setIsModalNotification={setIsModalNotification}/>
        <WeekLimit limitWeek={limitWeek} MapArrayForCountSpend={MapArrayForCountSpend} 
        setIsModalNotification={setIsModalNotification}/>
        <MonthLimit limitMonth={limitMonth} MapArrayForCountSpend={MapArrayForCountSpend}
         setIsModalNotification={setIsModalNotification}/>
        </>
}

export default ModalWindowNotification