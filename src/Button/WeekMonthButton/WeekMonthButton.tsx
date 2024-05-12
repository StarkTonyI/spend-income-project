import React, { useState } from 'react'
import './WeekMonthButtons.css'

interface WeekMonthButton {
  name:string
  setNameButton:React.Dispatch<React.SetStateAction<string>>
}

const WeekMonthButton:React.FC<WeekMonthButton> = ({name, setNameButton}) => {


    return <button onClick={()=>setNameButton(name)} className='buttonWeekMonth'>
    {name}
</button>
  
    
}
export default WeekMonthButton