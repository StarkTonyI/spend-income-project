import dayjs from "dayjs";
import EveryDayWeekMounthSpend from "../../../Data/EveryDaySpendCount";
import React, { useContext, useEffect, useState } from "react";
import ButtonContext from "../../../Context/Context";

interface DayLimit {
    limitDay:string | number
    setIsModalNotification:React.Dispatch<React.SetStateAction<boolean>>;
}
const DayLimit:React.FC<DayLimit> = ({limitDay, setIsModalNotification}) => {
    const [stopingDay,setStopingDay] = useState(false);
    const { refresh } = useContext(ButtonContext)
    const currentDay = dayjs().date(); 
    let SpendOneDay = EveryDayWeekMounthSpend().currentInfo.spend
    const localDay = localStorage.getItem('DayLimit');
    const dayLimits = localDay ? JSON.parse(localDay) : {
        day:currentDay,
        dayLimit:limitDay,
        name:'DayLimit'
        }
 
        
    useEffect(()=>{
        if(limitDay){
            localStorage.setItem('DayLimit', JSON.stringify(dayLimits));
            }  
        if(dayLimits.dayLimit > 0){
        
        if((currentDay - dayLimits.day) === 0){
        
        if(SpendOneDay > dayLimits.dayLimit){
                 setStopingDay(true)
                 setIsModalNotification(true)
             }
        else{
                console.log(`Daylimits time work, but limit was no ended, limit - ${dayLimits.dayLimit}`)
             }
         }
         else{
                console.log('Daylimits time is over but exist before')
         }
             }
         else{
                console.log('Daylimit no exist')
             } 
      

    }, [limitDay, refresh])

 
 
    return stopingDay &&
    <>
    <div style={{color:'red',fontSize:'30px', fontWeight:'bold' }}>Warning!</div>
    <div>
    <div  style={{fontSize:'30px', fontWeight:'bold', color:'white'}}>Day limit {dayLimits.dayLimit}$ ended</div>
    </div>
    </>
}

export default DayLimit;