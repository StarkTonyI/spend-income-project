import React from 'react';
import { useState } from 'react';
import { MoneyBalanse } from './AllSpendDataFunction/SpendAllFunction';
import { SpendItem } from '../../../Data/SpendData';
import ForChangeSpendButtom from '../../../CounterMathBack/FinanseSumm';
import './SpendBoxDefault.css'
interface SpendBoxProps {
    passInfo:SpendItem | undefined;
    indicate:SpendItem | string | boolean
  }

const SpendBoxDefault:React.FC<SpendBoxProps> = ({passInfo, indicate}) => {

  
    
  const [money, setMoneyControl] = useState('')
  const [activation,setActivation]= useState(false)

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


    const ConfirmedMoney = indicate ? money : null

    return(
     
     <>
   
        <div style={{display:'flex', justifyContent:'space-between', width:'200px', height:'100px',
         alignItems:'center'}}>

        <img src={passInfo?.icon} style={{width:'80px', height:'80px'}}
        onMouseEnter={()=>OnWork()} onMouseLeave={()=>OnOff()} 
       /> 
    <div style={{visibility:activation ? 'visible' : 'hidden'}} className={'tooltip'}><a href={passInfo?.link}>{passInfo?.linkName}</a></div>        
    <div>

           <p style={{fontSize:'50px', fontWeight:'bold'}}>{`${passInfo?.summ}${MoneyBalanse()
             ? MoneyBalanse().icon : '$'}`}</p>   
        </div>
       <div>
        <input
        value={money}
        onChange={handleSumm} 
        style={{width:'250px', height:'40px', border:'2px'}} placeholder='Summ'></input>
        </div>
       
        </div>
      {ConfirmedMoney !== null && <ForChangeSpendButtom passInfo={passInfo} value={ConfirmedMoney}/> }  
      </>
     
    )
}
export default SpendBoxDefault;