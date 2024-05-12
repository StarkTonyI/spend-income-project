import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';
import { useContext } from 'react';
import ButtonContext from '../Context/Context';
import './SelfModal/Modal.css'
import MoneyLimit from '../Header/LimitMoney/MoneyLimit';
import DatePickerCalendar from '../Header/Calendar/Calendar';
import ModalWindowNotification from '../Header/LimitMoney/CheckingOfLimits';
interface ModalComponent {
  setPassingSignalValue:React.Dispatch<React.SetStateAction<boolean>>
}

const ModalComponent: React.FC<ModalComponent> = ({setPassingSignalValue}) => {
 
  const [passingSignal, setPassingSignal] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [signal, setSignal] = useState(false)  
  const [limitDay, setLimitDay] = useState(0);
  const [limitWeek, setLimitWeek] = useState(0);
  const [limitMonth, setLimitMonth] = useState(0);
  const {selectedButton, setSelectedButton} = useContext(ButtonContext)  
  const [isModalOpenNotification, setIsModalOpenNotification] = useState(false)
  const modalWork: HTMLElement | null = document.getElementById('modalWork') as HTMLElement | null;
  const overlayWork: HTMLElement | null = document.getElementById('overlayWork') as HTMLElement | null;
  useEffect(()=>{
    setPassingSignalValue(passingSignal)
  }, [passingSignal])
const handleOk = () => {
  setSelectedButton('')
  setTimeout(()=>{
    setIsModalOpen(false)
  }, 200)
  setSignal(true)
};
const handleCancel = () => {
  setIsModalOpen(false);
  setSelectedButton('')
};
const CalendarComponent = selectedButton === 'Calendar'
const TakeInputForAnzlize = (limitDay:any, limitWeek:any, limitMonth:any)=>{
      setLimitDay(limitDay);
      setLimitWeek(limitWeek);
      setLimitMonth(limitMonth);
}
if(modalWork && overlayWork){
  if(isModalOpenNotification){
  modalWork.style.display = 'block'
  overlayWork.style.display = 'block'
  }
}

function HideFunction(){
  console.log('Fack no ')
  if(modalWork && overlayWork){
    modalWork.style.display = 'none'
    overlayWork.style.display = 'none'
  }
}

useEffect(()=>{
  selectedButton === 'Calendar' || selectedButton === 'Warning' ? 
  setIsModalOpen(true) : null;
},[selectedButton])

  return (
<>
  <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} destroyOnClose>    
    {CalendarComponent && <DatePickerCalendar modalOpen={setIsModalOpen} setPassingSignal={setPassingSignal}/>}
      <MoneyLimit PassingInput={TakeInputForAnzlize} signal={signal}/>
  </Modal>  
    <div id='modalWork' className='modalWork'> 
    <div className="cardOpen">
   <ModalWindowNotification limitDay={limitDay} limitWeek={limitWeek} 
   limitMonth={limitMonth} setIsModalNotification={setIsModalOpenNotification}/>
   </div>
   <button className='closeButton' onClick={()=>HideFunction()}>Close</button>  
  </div>
  <div id="overlayWork" className="overlayWork"></div> 
</>
  )
  
};

export default ModalComponent;