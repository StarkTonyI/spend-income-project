import React, { useState } from "react";
import SavingButton from "../SavingButton/SavingButton";
type PassingCalendarFunction = (value:boolean) => void;

interface SavingCalendarComponent{
    passingCalendar:PassingCalendarFunction
}

const SavingCalendar:React.FC<SavingCalendarComponent> = ({passingCalendar}) => {
   const [indicateActive, setIndicateActive] = useState(false);
   const handleIndicateChange = () => {
    setIndicateActive((prevIndicateActive) => !prevIndicateActive);
    passingCalendar(!indicateActive); // Passing the updated value to the parent component
};
   return(
    <div>
        <div onClick={()=>handleIndicateChange()} style={{width:'150px', display:'flex',
            justifyContent:'center',
            alignItems:'center'}}>
    <SavingButton/>
          </div>
        </div>
    )
}
export default SavingCalendar;