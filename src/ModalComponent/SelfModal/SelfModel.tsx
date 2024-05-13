import './SelfModal.css'
//import Calculater from '../../Header/Calculate/Calculate';
import React, { useContext } from 'react';
import ButtonContext from '../../Context/Context';
import Calculator from '../../Header/Calculate/Calculate';
import SpendMoney from '../../Header/SpendMoney/SpendMoney';
import CartBlock from '../../Header/Calendar/CalendarModal/SavingBlock/CartBlock';

interface Modal {
  value:boolean
  setPassingSignal:React.Dispatch<React.SetStateAction<boolean>>
}

const ModalFunction:React.FC<Modal> = ({value, setPassingSignal}) => {
  const { selectedButton, setSelectedButton } = useContext(ButtonContext)
  const modal: HTMLElement | null = document.getElementById('modal') as HTMLElement | null;
  const overlay: HTMLElement | null = document.getElementById('overlay') as HTMLElement | null;


  if (modal && overlay){


    if(selectedButton === 'Calculate' || selectedButton === 'Expenses'){

    modal.style.display = 'block'
    overlay.style.display = 'block'
    }
    if(value){
      setTimeout(()=>{
       overlay.style.display = 'block'
       modal.style.display = 'block'
      }, 200)      
  }
}

      const HideFunction = ()=>{
        if (modal && overlay){ 
          modal.style.display = 'none'
          overlay.style.display = 'none'
          setPassingSignal(false)
          setSelectedButton('')
          };
      }
   
  return (
    <>

<div>
  <div id="modal" className="modal">
    <div className="modal-content">
      {selectedButton === 'Calculate' && <Calculator/>}
      {selectedButton === 'Expenses' && <SpendMoney/>}
      {value && <CartBlock/>}
    </div>
   <button className='closeButton' 
   onClick={()=>HideFunction()}>Close</button>    
  </div>
<div id="overlay" className="overlay"></div> 
</div>
        
 </>
    )
  }
    

export default ModalFunction