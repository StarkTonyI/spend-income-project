import React from 'react';
import { useState } from 'react';
import { SpendItem } from '../../../Data/SpendData';
import './SpendBoxDefault.css'
import AddFinanseFunction from '../../../CounterMathBack/AddFinanse';
interface SpendBoxProps {
    passInfo:SpendItem | undefined;
    indicate:SpendItem | string | boolean
  }

const AddSpendBox:React.FC<SpendBoxProps> = ({passInfo, indicate}) => {
  const [activation,setActivation]= useState(false)
    const [money, setMoneyControl] = useState('');
    const [nameControl, setNameControl] = useState('')
    const handleSumm = (event:any) => {
      const newValue = event.target.value.replace(/\D/g, '');
      setMoneyControl(newValue);
    };
    function OnWork(){
      setActivation(true)
      }
    function OnOff(){
      setActivation(false)
    }
  
    const ConfirmedMoney = indicate ? money : null;
    const Naming = indicate ? nameControl : null;

    return(
     <>
        <div style={{display:'flex', justifyContent:'space-between', width:'200px', height:'100px', alignItems:'center'}}>
        <img src={passInfo?.icon} style={{width:'80px', height:'80px'}}
        onMouseEnter={()=>OnWork()}
        onMouseLeave={()=>OnOff()}
        /> 
        <div style={{visibility:activation ? 'visible' : 'hidden'}} className={'tooltip'}>
          <a href={passInfo?.link}>{passInfo?.linkName}</a></div>  
       <div>
       
        <input onChange={(event)=>setNameControl(event.target.value)}
        style={{width:'250px', height:'40px', border:'2px', marginBottom:'10px'}} placeholder='Name'/>
        <input onChange={handleSumm}
         placeholder='Summ' style={{width:'250px', height:'40px', border:'2px'}} 
         value={money}
         />
        {ConfirmedMoney !== null && <AddFinanseFunction passInfo={passInfo} money={ConfirmedMoney} naming={Naming}/> } 
        </div>
        </div>
    
      </>
     
    )
}
export default AddSpendBox;