import React, { useEffect, useState } from 'react';
import styles from '../UserStyle/UsersStyle.module.scss';
interface SelectCurrencyProps {
  value: (value: any) => void; 
  disabled:boolean
  DivClick:(value:any) => void;
  selectedСurrency:string 
}
const SelectCurruncy:React.FC<SelectCurrencyProps> = ({value, disabled, DivClick, selectedСurrency}) => {

  const currency = [  
    {
      currency:'USD', 
      sign:'$',
    },
    {
      currency:'EUR', 
      sign:'€',
 
    },
    {
      currency:'RUB', 
      sign:'₽',
    }
    ]
 
  const handleCurrencyClick = (event:any) => {

   let FilterValueCurrency = currency.filter((item)=>item.currency === event.target.value)
    value(FilterValueCurrency)
  }
 //selected={opt.currency === selectedСurrency}
  return(
    <div className={styles.container} onClick={()=>DivClick('Currncy')}> 
    <select defaultValue={selectedСurrency} disabled={disabled} className={styles.webflow} style={{fontSize:'20px', color:'white'}} 
    onChange={handleCurrencyClick}> 
    {currency.map((opt:any, index:any)=>(
     <option value={opt.currency}  
     key={index}>{opt.currency}</option>
    ))}
      </select>
      </div>
  )


}
export default SelectCurruncy