import {  Modal } from 'antd';
import AddSpendBox from './SpendBoxComponent/AddSpend';
import SpendBoxDefault from './SpendBoxComponent/SpendBoxDefault';
import React, { useEffect, useState } from 'react';
import { SpendItem } from 'Data/SpendData';
interface SpendBoxProps {
    passInfo:SpendItem | undefined;
    setPassInfo:React.Dispatch<React.SetStateAction<SpendItem | undefined>>
  }
  

const SpendBox: React.FC<SpendBoxProps> = ({ passInfo, setPassInfo }) => {
  const [open, SetOpen] = useState(false);
  const [indicate, setIndicate] = useState(false)
 
  async function HandleOK(){
    setTimeout(()=>{
      setPassInfo(undefined)
    ,500})
    
    
    await setIndicate(true)
     SetOpen(false)
     await setIndicate(false)
   }

  const handleCancel = () => {
    setTimeout(()=>{
      setPassInfo(undefined)
    },500
    )
    SetOpen(false)
  }
  useEffect(()=>{

    passInfo ? SetOpen(true) : SetOpen(false);
  }, [passInfo])

  function StabilityFunction(){
    return passInfo?.name !== 'Add spend' && passInfo !== undefined
  }



        return (
    <>
       <Modal title={passInfo?.name} open={open} onOk={HandleOK} onCancel={handleCancel} destroyOnClose>
         {StabilityFunction()  && <SpendBoxDefault passInfo={passInfo} indicate={indicate}/>} 
         {passInfo?.name === 'Add spend' && <AddSpendBox passInfo={passInfo} indicate={indicate}/>}
       </Modal>
    </>
  );
};

export default SpendBox;