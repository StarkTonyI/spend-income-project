import { useState } from "react"
import SavingBlock from "./SavingBlock"

import { DataPassingInfo } from "../CalendarModalInfo"

const LocalSavingData:string | null = localStorage.getItem('PlanSpend')

export let AllDateParametr:DataPassingInfo[] = LocalSavingData ? JSON.parse(LocalSavingData) : [{
    id:1,
    summ:0,
    cause:'',
    date:''
}]
   


const CartBlock = () => {
  
  
  
    const [value,setValue] = useState('')
    function Cause(item:any){
        setValue(item)
       let FilterAllData = AllDateParametr.filter(val=> val.cause !== item)
        console.log(FilterAllData)
       AllDateParametr = FilterAllData
        localStorage.setItem('PlanSpend', JSON.stringify(AllDateParametr));
    }
    console.log(AllDateParametr)
    let SavingLocalDate = localStorage.getItem('PlanSpend')  
    let ParsingLocalDate = SavingLocalDate ? JSON.parse(SavingLocalDate) : null

    let FilterPassingLocalDate = ParsingLocalDate.filter((i:any)=>i.summ > 0)
    let DeleteFilterPassingLocalDate = FilterPassingLocalDate.filter((param:any)=>param.cause !== value)
    console.log(DeleteFilterPassingLocalDate)
        console.log(value)
    return(
    <>
    {DeleteFilterPassingLocalDate.map((item:any, index:any)=>(
        <SavingBlock item={item} Cause={Cause} key={index}/>
    ))}
        </>
    )}
export default CartBlock;