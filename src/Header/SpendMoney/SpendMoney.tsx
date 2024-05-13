import './SpendMoney.css'
import { useState } from 'react';
import { AllSpendDataFunction, MoneyBalanse } from '../../Sider/SiderComponents/SpendBoxComponent/AllSpendDataFunction/SpendAllFunction';
import ButonEvent, { ButtonSpend } from '../../Button/ButtonEvent/ButtonEvent';
const SpendMoney = () => {

    const [signalForSpendMoney, setSignalForSpendMoney] = useState(false)
    const [display, setDisplay] = useState('0')
    const HandleSpendButton = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

        const target = event.currentTarget;
        const buttonText = target.innerText;
  
         
        if (display === '0') {
            // If display is '0' or button text is 'Clear', set display to buttonText
            setDisplay(buttonText);
        }
       else if(buttonText === 'Clear'){
        setDisplay('0')
       }
       else if(buttonText === 'Spend'){
        setSignalForSpendMoney(true)
        AllSpendDataFunction(parseInt(display))  
        setDisplay('0')
    }
        else {
            // Otherwise, concatenate buttonText with current display value
            setDisplay(display + buttonText);
        }
    }
    return(
        <div className='all-box-spend-money'>
            <div className="display-text">
            <div className='number'>{display}{MoneyBalanse().icon}</div>
            </div>
            <div className='buttons-all'>
                <div>
           <ButonEvent click={HandleSpendButton} name='1'/>
           <ButonEvent click={HandleSpendButton} name='2'/>
           <ButonEvent click={HandleSpendButton} name='3'/>
           <ButonEvent click={HandleSpendButton} name='0'/>
             </div>
            <div>
            <ButonEvent click={HandleSpendButton} name='4'/>
            <ButonEvent click={HandleSpendButton} name='5'/>
            <ButonEvent click={HandleSpendButton} name='6'/>
            <ButonEvent click={HandleSpendButton} name='Clear'/>
            </div>
            <div>
            <ButonEvent click={HandleSpendButton} name='7'/>
            <ButonEvent click={HandleSpendButton} name='8'/>
            <ButonEvent click={HandleSpendButton} name='9'/>
            <ButtonSpend click={HandleSpendButton} name='Spend' 
            signal={signalForSpendMoney}/>    
            </div>
            </div>
           
        </div>
    )
} 
//window.onload = SpendMoney;
export default SpendMoney