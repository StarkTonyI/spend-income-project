import React, { useState } from "react"
import { SalaraBox, SalaraData } from "../../../Data/SalaraData"
import SalaraModal from "./SalaraModal"
import Block from "../../../Block/Block"
const SalaraBoxAll:React.FC = () => {
   const [salaraParamets, setSalaraParametr] = useState<SalaraBox>();
    const HandleButtonClick = (ClickItem:SalaraBox) => {
       setSalaraParametr(ClickItem)
    }

    function PassSignal(param:any){
        if(param === false){
        const RefreshButtom = setTimeout(() => {
            setSalaraParametr(undefined)
        },100);
        }
    }
  return(
    <div>     
        {SalaraData.map((item)=>(
        <Block item={item} onClick={HandleButtonClick} key={item.id}/>
        ))} 
        {salaraParamets && <SalaraModal PassSignal={PassSignal} salaraPassInfo={salaraParamets}/>}
    </div>
    )
}

export default SalaraBoxAll