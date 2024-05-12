import dayjs from "dayjs";
import { TotalSummBalanse } from "../../../Sider/SiderComponents/SpendBoxComponent/AllSpendDataFunction/SpendAllFunction"
import EveryDayWeekMounthSpend from "../../../Data/EveryDaySpendCount";
import React, { useContext, useEffect, useState } from "react";
import ButtonContext from "../../../Context/Context";

interface LimitWeek {
    limitWeek:string | number
    MapArrayForCountSpend:any
    setIsModalNotification:React.Dispatch<React.SetStateAction<boolean>>;
}


const WeekLimit:React.FC<LimitWeek> = ({limitWeek, MapArrayForCountSpend, setIsModalNotification}) => {
    const { refresh } = useContext(ButtonContext)
    const [stopingWeek, setStopingWeek] = useState(false);
    let Spending = TotalSummBalanse('').Spend
    const currentDay = dayjs().date(); 
    const currentMonth = dayjs().format('M');   
    let SpendOneDay = EveryDayWeekMounthSpend().currentInfo.spend
    let SpendEveryDay = localStorage.getItem('EveryDay');
    let ParseSpendEveryDay = SpendEveryDay ? JSON.parse(SpendEveryDay) : null



    const localWeek = localStorage.getItem('WeekLimit');

    const weekLimits = localWeek ? JSON.parse(localWeek) : {
        day:currentDay,
        weekLimit:limitWeek,
        name:'WeekLimit',
        month:currentMonth
    }

    const CorrectWeekLimit = () => {
    let LimitWasEndedOrNo = false;
    let WeekDate = dayjs().subtract(7, 'day').format('D')
    WeekDate >= weekLimits.weekLimit ? LimitWasEndedOrNo = false : LimitWasEndedOrNo = true; 
        return LimitWasEndedOrNo
    }
    //console.log(CorrectWeekLimit())


useEffect(()=>{
     if(limitWeek){
    localStorage.setItem('WeekLimit', JSON.stringify(weekLimits))  
        }
        if(weekLimits.weekLimit > 0){
        
        if((currentDay - weekLimits.day) <= 7 || CorrectWeekLimit()){
      
        if((MapArrayForCountSpend(weekLimits) + SpendOneDay) > weekLimits.weekLimit){
            setStopingWeek(true);
            setIsModalNotification(true)
        }
        else{
            console.log(`Week limit exist, time is work, but limit was no ended, limit - ${weekLimits.weekLimit}`)
        }
        }
        else{
            console.log('Week limit exist but time is over')
        }
        }
        else{
            console.log('Week limit no exist')
         }
}, [limitWeek, refresh])



    return stopingWeek &&
    <>
    <div style={{color:'red',fontSize:'30px', fontWeight:'bold' }}>Warning!</div>
    <div  style={{fontSize:'30px', fontWeight:'bold', color:'white'}}>Week limit {weekLimits.weekLimit}$ ended</div>
    </>
}
export default WeekLimit