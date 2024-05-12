import React, { useState, useEffect } from "react"
import SpendData from "../Data/SpendData"
import { SpendItem } from "../Data/SpendData"
import { useContext } from "react"
import ButtonContext from "../Context/Context"
import spend from '../icons/Expenses.png'
interface AddSpend{
    passInfo:SpendItem | undefined
    money:string
    naming:string | null
}   
const AddFinanseFunction:React.FC<AddSpend> = ({passInfo, money, naming}) => {
    //const ParseMyMoney: string | null = localStorage.getItem('data');

    let TakeLastId:number

   
    const [time, setTime] = useState(false);
    const { setRefresh } = useContext(ButtonContext)
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setTime(true);
        naming ? setRefresh(money) : null      
   SpendData.map((data, index)=>{
    TakeLastId = index + 1
})

SpendData.map((item)=>{
    if(item.name === 'Add spend'){
        item.id = TakeLastId + 1
    } 
})
 
    if(passInfo?.name === 'Add spend' && TakeLastId !== undefined && naming !== null){
        const newSpend:SpendItem= {
          id:TakeLastId,
          name:naming,
          summ:money,
          icon:spend,
          link:"https://www.flaticon.com/free-icons/expense" ,
          linkName:'Expense icons created by Sukma Aditia-Flaticon'
        }
   
        SpendData.push(newSpend)
        SpendData.push(SpendData.splice(TakeLastId - 1, 1)[0]);
        localStorage.setItem('data', JSON.stringify(SpendData))    
       }
        return () => clearTimeout(timeoutId); // Clear timeout when component unmounts or time becomes true
    },1000);

    if (time) {
        setTime(false);
    }
},[time])
    return null
    
}
    export default AddFinanseFunction;
