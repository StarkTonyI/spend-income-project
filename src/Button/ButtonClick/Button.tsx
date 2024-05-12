import React from 'react'
import './ButtonStyle.css'
interface Button {
    onClick:() => void
}
const Button:React.FC<Button> = ({onClick}) => {
   
    return <button onClick={()=>onClick()} className='Button-Okay'>Okay</button>

}
export default Button