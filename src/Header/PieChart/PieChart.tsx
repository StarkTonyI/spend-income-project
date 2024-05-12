import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import Color, { BorderColor} from '../../Data/Color';
import React, { useEffect, useMemo } from 'react';
ChartJS.register(ArcElement, Tooltip, Legend);

 

interface PieFunction {
  passIndicate:boolean
}


export const PieFunction:React.FC<PieFunction> = ({passIndicate}) => {



  const SpendData = localStorage.getItem('data');
    
  const SpendParseData = SpendData ? JSON.parse(SpendData) : null;
  
  const FilterSpendParseData = SpendData ? SpendParseData.filter((value:any)=>
    value.name !== 'Add spend' 
  )
  : SpendParseData
 let TotalSummSpend = useMemo(()=>{
  let Spend = 0;
  const LocalResult:string | null = localStorage.getItem('AllParametrOfBalanse')
  let ParseLocalResult = LocalResult ? JSON.parse(LocalResult) : null;
 ParseLocalResult ? ParseLocalResult.map((item:any)=>Spend += item.SpendFromSpendBox) : null
return Spend
}, [])
let ExpensesWithoutNames = {
  name:'Expenses Without Names',
  summ:TotalSummSpend
}

FilterSpendParseData ? FilterSpendParseData.push(ExpensesWithoutNames) : null

  const data = {
    labels:FilterSpendParseData ? FilterSpendParseData.map((item:any)=> item.name) : '',
    datasets: [
      {
        label: 'Spend summ',
        data: FilterSpendParseData ? FilterSpendParseData.map((item:any)=> item.summ) : 0,
        backgroundColor:[...Color],
        borderColor: [...BorderColor],
        borderWidth: 1,
      },
    ],
  };



  

return <Pie data={data}/> 
}
