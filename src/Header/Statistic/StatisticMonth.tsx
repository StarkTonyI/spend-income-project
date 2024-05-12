import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import dayjs from 'dayjs';

import { useContext, useMemo } from 'react';
import ButtonContext from '../../Context/Context';
import MonthShiftsRegulate from '../../RegulatorShiftsMonths/RegulatorShiftsMonths';

function WholeAlgoritmMonth(){
const everyDay = localStorage.getItem('EveryDay')
const everyDayParse = everyDay ? JSON.parse(everyDay) : null;
let weekNow = [];
let CorrectMonth = -MonthShiftsRegulate().MonthDateBase.length

console.log(MonthShiftsRegulate().MonthDateBase)
console.log(MonthShiftsRegulate().CurrentMonthDate)

  for(let i = 0; i < 7; i++){
    let CorrectMonthSign = CorrectMonth + i
    weekNow.push(`${dayjs().add(CorrectMonthSign, 'month').format('MMMM')}`)
  }
    const {passSignal} = useContext(ButtonContext)
    let array = useMemo(()=>{
      let MonthDate:any = [...MonthShiftsRegulate().MonthDateBase, 
        MonthShiftsRegulate().CurrentMonthDate];
       return MonthDate    
    }, [passSignal])
   
    ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

 const options = { 
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text:'Spend/Expenses month Info',
    },
  }
};


const labels = weekNow.map((item:any)=>[item]);
 const data = {
  labels,
  datasets: [
    {
      label: 'Spend',
      data:array.map((item:any)=>[item ? item.spend : null]),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },

    {
      label: 'Expenses',
      data:array.map((item:any)=>[item ? item.expenses : null]),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
 }
return {
  data:data,
  options:options
}
}  

export function StatisticMonth() {
  return <>
  <Bar options={WholeAlgoritmMonth().options} data={WholeAlgoritmMonth().data}/>
  </>
}
