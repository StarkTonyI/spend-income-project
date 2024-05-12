import React from "react"
import ButtonContext from "../../Context/Context"
import { useContext, useState } from "react"
import './FunctiononalPictureStyle.css'
interface FunctionalPicture {
    sourse:string,
    ClickFunctional:string,
    className:string, 
    link:string
}
const FunctionalPicture:React.FC<FunctionalPicture> = ({sourse, ClickFunctional, className, link}) => {
    const { setSelectedButton } = useContext(ButtonContext)    
    const [activation,setActivation]= useState(false)
    const handleClick = (value:any) => {
      setSelectedButton(value);
    };
    
    function OnWork(){
      setActivation(true)
      }
    function OnOff(){
      setActivation(false)
    }

    return <div>
    <img className={className} src={sourse} onClick={(()=> handleClick(ClickFunctional))} 
    onMouseEnter={()=>OnWork()} onMouseLeave={()=>OnOff()} 
    />  
    <div style={{visibility:activation ? 'visible' : 'hidden'}} className="visible">
  {link}
    </div>
  </div>
}
export default FunctionalPicture