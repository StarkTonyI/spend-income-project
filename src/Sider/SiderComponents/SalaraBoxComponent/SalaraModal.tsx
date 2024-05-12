import { Modal } from 'antd';
import { useEffect, useState } from 'react';
import { SalaraBox, SalaraCurrencyIcon } from '../../../Data/SalaraData';
import React from 'react';
import '../SpendBoxComponent/SpendBoxDefault.css'
import SalaraCount from '../../../CounterMathBack/SalaraFinsnsCount';
interface SalaraModal{
    salaraPassInfo:SalaraBox | undefined
    PassSignal:any
}
const SalaraModal:React.FC<SalaraModal> = ({salaraPassInfo, PassSignal}) => {
  const [activation,setActivation]= useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [namingControl, setNamingControl] = useState('');
    const [money, setMoneyControl] = useState('')
    const [finishMoney, setFinishMoney] = useState('');
    const [finishNaming, setFinishNaming] = useState('')
      useEffect(()=>{ 
        setIsModalOpen(true)
      },[salaraPassInfo])
    
      const handleOk = () => {
      PassSignal(false)
       setIsModalOpen(false);
       setFinishMoney(money);
       setFinishNaming(namingControl)
      };
    
      const handleCancel = () => {
        PassSignal(false)
        setIsModalOpen(false);
      };
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

      return(
       <>
       <Modal  open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
    <div style={{display:'flex', justifyContent:'space-between', width:'200px',
     height:'100px', alignItems:'center'}}>
        <img src={SalaraCurrencyIcon().value} style={{width:'80px', height:'80px'}} 
        onMouseEnter={()=>OnWork()} onMouseLeave={()=>OnOff()}
        />
       
        <div style={{visibility:activation ? 'visible' : 'hidden'}} className={'tooltip'}>
          <a href={salaraPassInfo?.link}>{salaraPassInfo?.linkName}</a>
          </div>  
       
          <div> 
           <p style={{fontSize:'50px',
            fontWeight:'bold'}}>{`${salaraPassInfo?.summ}`}</p>   
        </div>
       <div>
       <input style={{width:'250px', height:'40px', border:'2px', marginBottom:'10px'}} 
       placeholder='Naming' onChange={(event)=>setNamingControl(event.target.value)}/>
        <input style={{width:'250px', height:'40px', border:'2px'}}
         value={money}
         placeholder='Summ' onChange={handleSumm}/>
        </div>
        </div>
       </Modal>
       <div>{finishMoney && 
       <SalaraCount naming={finishNaming} 
       money={finishMoney}/>}</div>
    </>
    )
}
export default SalaraModal;