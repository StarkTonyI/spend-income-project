import React from 'react'
import './ButtonUser.css'

interface ButtonUser{
    Confirm:(value:string) => void;
} 
const ButtonUser:React.FC<ButtonUser> = ({Confirm}) => {
    return <button onClick={()=>Confirm('')} className='ButtonUser'>
    <span className="textUser">Confirm</span>
  </button>
}
export default ButtonUser