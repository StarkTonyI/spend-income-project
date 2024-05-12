import React, { useState } from "react"
import { SalaraData, SalaraBox } from "../Data/SalaraData"
import dayjs from 'dayjs'
import { SalaraCurrencyIcon } from "../Data/SalaraData"
interface SalaraCountType{
    naming:string;
    money:string;
}

const SalaraCount:React.FC<SalaraCountType> = ({naming, money}) => {
const currentDay = dayjs();
const currendDayNow = currentDay.format('D');
const NamingSumm = !isNaN(parseInt(money))
//console.log(NamingSumm)
//console.log(naming)
//console.log(money)

let CorrectIndex = 0;
SalaraData.map((item,index)=>{
    CorrectIndex = index + 2
})
//console.log(CorrectIndex)
const SalaraAddData:SalaraBox = {
    id:CorrectIndex,
    name:naming,
    summ:money,
    icon:SalaraCurrencyIcon().value,
    date:currendDayNow,
    link:SalaraCurrencyIcon().link,
    linkName:SalaraCurrencyIcon().name
}  
NamingSumm ? SalaraData.push(SalaraAddData) : null

localStorage.setItem('salara', JSON.stringify(SalaraData))
    
    return null
}

export default SalaraCount