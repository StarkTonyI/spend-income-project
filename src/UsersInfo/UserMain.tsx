import { useState, useEffect } from 'react';
import usersIcons from '../icons/User.png'
import user from './UserStyle/User.module.scss'
import InputUser from './UserInput';
import SelectCurruncy from './UserSelect/UserSelect';
import DeleteEverything from '../DeleteEverything/DeleteEverything';
import ButtonUser from '../Button/ButtonUser/ButtonUser';
import { useNavigate } from 'react-router-dom'
const UserInfo = () => {
  
  const [activation,setActivation]= useState(false)
  const [icon, setIcon] = useState('')
  const [chechButton, setChechButton] = useState(false)
  const [error, setError] = useState(false)
  const [currency, setCurrency] = useState('')
  const [name, setName] = useState<string>();
  const [summ, setSumm] = useState<number>();
  const [country, setCountry] = useState<string>()
  const [RemoveAccountSignal, setRemoveAccountSignal] = useState(false)
  const [changePage, setChangePage] = useState(false)
  const history = useNavigate();

  const wholeSumm = (event:any) => {
    const newValue = event.target.value.replace(/\D/g, '');
    setSumm(newValue);
  };
  function Country(event:any){
    setCountry(event.target.value)
  } 
  function Name(event:any){
    setName(event.target.value)
  }
  function TakeCurrncyForSaving(value:any){
    setIcon(value[0].sign)
    setCurrency(value[0].currency)
  }

  let MyMoneySaving = localStorage.getItem('money')
  let MyMoneySavingParse = MyMoneySaving ? JSON.parse(MyMoneySaving) : null
  const MyMoney = MyMoneySavingParse ? MyMoneySavingParse : {
    money:summ,
    name:name,
    country:country,
    currency:currency ? currency : 'USD',
    icon:icon ? icon : '$'
  } 


  const disabled = MyMoneySavingParse ? true : false
  console.log(summ)
  function ChangeRef(){
 
    if(summ && summ > 0 && name && country){
      setChechButton(true)
      setChangePage(true)
      //window.location.href="http://localhost:5173/pay"
    }
    else if(disabled){
      setChangePage(true)
      //window.location.href="http://localhost:5173/pay"

    }
    else(setError(true))
  }
  function DivClick(value:any){
    console.log(value)
    if(disabled){
      setRemoveAccountSignal(true)
    }
    console.log(summ)
  }
  function RemoveBalanseOrAccount(){
    DeleteEverything()
    setTimeout(() => {
      window.location.reload()
    },500);
  }
  
  function OnWork(){
    setActivation(true)
    }
  function OnOff(){
    setActivation(false)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      changePage ? history('/spending-income/') : null;
    }, 1000);
    return () => clearTimeout(timeout);
  }, [changePage]);



  chechButton ?  
  localStorage.setItem('money', JSON.stringify(MyMoney))
  : null
 console.log(MyMoney)
  return (
    <>  
    <div style={{backgroundColor:'transparent'}}>
    <div  className={user.gradient}></div>
      <div className={user.userBlock}>
        <img className={user.userIcon} src={usersIcons} 
        onMouseEnter={()=>OnWork()} onMouseLeave={()=>OnOff()} 
        />
         <div style={{visibility:activation ? 'visible' : 'hidden', marginTop:'-100px'}} 
        className={user.tooltip}>
          <a href="https://www.flaticon.com/free-icons/user" title="user icons">User icons created by Freepik-Flaticon</a>
        </div>
        <InputUser value={name} placeholder={disabled ? MyMoney.name.toString() :
        'Name'} onChange={Name} disabled={disabled} DivClick={DivClick} name='Name'/>
        <InputUser value={country} placeholder={disabled ?
         MyMoney.country.toString() :
        'Country'} onChange={Country} disabled={disabled} DivClick={DivClick} name={'Country'}/>
        <SelectCurruncy value={TakeCurrncyForSaving} disabled={disabled} DivClick={DivClick} selectedСurrency={disabled ?
         MyMoney.currency.toString() :
        ''}/>
        <InputUser onChange={wholeSumm} placeholder={disabled ? MyMoney.money.toString() :
        'Your balanse'} value={summ} disabled={disabled} DivClick={DivClick} name='Balanse'/>
        {error && <p style={{color:'red', fontSize:'20px'}}>You need to fill out the entire form</p>}
        {RemoveAccountSignal && <div style={{color:'red', fontSize:'20px'}}>
        The form is already filled out, if you want to change it you need to
        <span className={user.Underline} onClick={()=>RemoveBalanseOrAccount()}> delete your account</span>
      </div>}
       <ButtonUser Confirm={ChangeRef}/>
      </div>
    </div>

    </>
  );
};

export default UserInfo;
