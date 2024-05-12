import dayjs from "dayjs";
import { TotalSummBalanse } from "../../../Sider/SiderComponents/SpendBoxComponent/AllSpendDataFunction/SpendAllFunction"
import EveryDayWeekMounthSpend from "../../../Data/EveryDaySpendCount";
import React, { useContext, useEffect, useState } from "react";
import ButtonContext from "../../../Context/Context";

interface LimitMonth {
    limitMonth:string | number
    MapArrayForCountSpend:any
    setIsModalNotification:React.Dispatch<React.SetStateAction<boolean>>;
}



const MonthLimit:React.FC<LimitMonth> = ({limitMonth, MapArrayForCountSpend,setIsModalNotification }) => {
   


    const [stopingMonth, setStopingMounth] = useState(false)
    const { refresh } = useContext(ButtonContext)
    let Spending = TotalSummBalanse('').Spend
    const currentDay = dayjs().date(); 
    const currentMonth = dayjs().format('M')   
    let SpendOneDay = EveryDayWeekMounthSpend().currentInfo.spend

    let SpendEveryDay = localStorage.getItem('EveryDay');
    let ParseSpendEveryDay = SpendEveryDay ? JSON.parse(SpendEveryDay) : null

   
   
    const localMonth = localStorage.getItem('MonthLimit');
    const monthLimits = localMonth ? JSON.parse(localMonth) : {
        month:currentMonth,
        monthLimit:limitMonth,
        name:'MonthLimit'
    }
  
    useEffect(()=> {
        if(limitMonth){
        localStorage.setItem('MonthLimit', JSON.stringify(monthLimits))     
        }
        if(monthLimits.monthLimit > 0){

            if(currentMonth === monthLimits.month){
               
            if((MapArrayForCountSpend(monthLimits) + SpendOneDay) > monthLimits.monthLimit){
                setStopingMounth(true)
                setIsModalNotification(true)
            }
            else{
                console.log(`Month limit is exist, time work, but limit no ended, limit - ${monthLimits.monthLimit}`)
            }
            }
            else{
                console.log('Month limit exist but time is ended')
            }
            }
            else{
                console.log('Month limits no exist')
            }
    }, [limitMonth, refresh])

    return stopingMonth && 
    <>
    <div style={{color:'red',fontSize:'30px', fontWeight:'bold' }}>Warning!</div>
    <div style={{fontSize:'30px',color:'white', fontWeight:'bold'}}>Month limit {monthLimits.monthLimit}$ ended</div>
 
    </>
}
export default MonthLimit