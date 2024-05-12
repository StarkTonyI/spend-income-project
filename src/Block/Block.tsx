import { SpendItem } from '../Data/SpendData'
import { SalaraBox } from '../Data/SalaraData';
import block from './Block.module.css'
import React, { useState } from 'react';

interface BlockWork {
  onClick:any;
  item: SpendItem | SalaraBox
}




const Block:React.FC<BlockWork> = ({item, onClick}) => {

  const [activation,setActivation]= useState(false)
  
  function OnWork(){
    setActivation(true)
    }
  function OnOff(){
    setActivation(false)
  }

  return(
  <div className={block.card} onClick={()=>onClick(item)} > 
<div className={block.visible}> 
<img className={block.img}
onMouseEnter={()=>OnWork()} onMouseLeave={()=>OnOff()} 
src={item.icon}/>
 </div>
  <div className={block.textBox}>
    <div className={block.textContent}>
      <p className={block.h1}>{item?.name}</p>
      <span className={block.span}></span>
    </div>
      <p className={block.p}>{item?.summ}</p>
    <div>
    <div style={{visibility:activation ? 'visible' : 'hidden'}} 
    className={block.tooltip}><a href={item.link}>{item.linkName}</a></div>
  </div>
</div> 
</div>
 
)
} 
export default Block