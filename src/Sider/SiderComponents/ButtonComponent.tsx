import React from "react";
import { SpendItem } from "Data/SpendData";
interface ButtonProps {
    onClick:any;
    item: SpendItem
}



export const ButtonLeftHand:React.FC<ButtonProps> = ({item, onClick }) => {
    return(
        <div className='button' key={item.id} onClick={()=>onClick(item) }> 
            <img className='img' src={item.icon}/>
            <div>{item.name}</div>
            <div className='summ'>{item.summ}$</div>
        </div>
    )
}

   

export const ButtonRightHand:React.FC<ButtonProps> = ({item, onClick}) => {
    return(
        <div className='button' key={item.id} onClick={()=>onClick(item)}> 
        <img className='img' src={item.icon}/>
        <div>{item.name}</div>
        <div className='summ'>{item.summ}$</div>
        </div>
    )
}