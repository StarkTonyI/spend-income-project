import React, { useContext, useEffect, useMemo, useState } from "react";
import '../LimitMoney/StyleMoneyLimit.css'
import ButtonContext from "../../Context/Context";
import DeleteLimit from "../../Button/DeleteButtonLimit/DeleteLimit";
interface PassingDate{
  PassingInput:any
  signal:boolean
}

const MoneyLimit:React.FC<PassingDate> = ({PassingInput, signal}) => {
  const [removeSignal, setRemoveSignal] = useState('')  
  
  const [limitDay, setLimitDay] = useState<number>();
  const [limitWeek, setLimitWeek] = useState<number>();
  const [limitMonth, setLimitMonth] = useState<number>()

  const { selectedButton } = useContext(ButtonContext)
  const WarningComponent = selectedButton === 'Warning'
 
    const localDay = localStorage.getItem('DayLimit');
    const localWeek = localStorage.getItem('WeekLimit');
    const localMonth = localStorage.getItem('MonthLimit');

    const Day = localDay ? JSON.parse(localDay) : null;
    const Week = localWeek ? JSON.parse(localWeek) : null;
    const Month = localMonth ? JSON.parse(localMonth) : null;

    const handleChangeDay = (event:any) => {
      const newValue = event.target.value.replace(/\D/g, '');
      setLimitDay(newValue);
    };
    const handleChangeWeek = (event:any) => {
      const newValue = event.target.value.replace(/\D/g, '');
      setLimitWeek(newValue);
    };
    const handleChangeMonth = (event:any) => {
    const newValue = event.target.value.replace(/\D/g, '');
      setLimitMonth(newValue);
    };

   function RemoveFunction(item:any){
    localStorage.removeItem(item)
    setRemoveSignal(item)
  }

   const SavingValue = useMemo(()=>{
    return removeSignal
   },[removeSignal])
  

  useEffect(()=>{
    if(signal){
      SavingValue ? window.location.reload() : null
      PassingInput(limitDay, limitWeek, limitMonth)
      }
  })


  return(
       <>
      {WarningComponent && 
  <div> 
    <div style={{display:'flex', flexDirection:'row'}}>
      <input
      disabled={Day ? true : false}
      className="limit-input"
      placeholder={Day ? Day.dayLimit : 'Day limit'}
      value={limitDay}
      onChange={handleChangeDay}
  />
  <DeleteLimit item={Day ? Day.name : null} RemoveFunction={RemoveFunction}/>
  </div>
  <div style={{display:'flex', flexDirection:'row'}}>
    <input
     disabled={Week ? true : false}
    className="limit-input"
    placeholder={Week ? Week.weekLimit : 'Week limit'}
    value={limitWeek}
    onChange={handleChangeWeek}
  />
    <DeleteLimit item={Week ? Week.name : null} RemoveFunction={RemoveFunction}/>
  </div>
    <div style={{display:'flex', flexDirection:'row'}}>
    <input
   disabled={Month ? true : false}
      className="limit-input"
      placeholder={Month ? Month.monthLimit : 'Month limit'}
      value={limitMonth}
      onChange={handleChangeMonth}/>
    <DeleteLimit item={Month ? Month.name : null} RemoveFunction={RemoveFunction}/>
</div>
  </div>
} 
    </>
    )
}    
export default MoneyLimit
