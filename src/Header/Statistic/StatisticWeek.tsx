import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import dayjs from 'dayjs';
import EveryDayWeekMounthSpend from '../../Data/EveryDaySpendCount';
export function WholeAlgoritm(){
const everyDay = localStorage.getItem('EveryDay')
const everyDayParse = everyDay ? JSON.parse(everyDay) : null;
const everyDayParseFilter = everyDayParse ? everyDayParse.filter((item:any)=>item.id > 0) : null;
  function MakeDateMoreBetter(){
    let passingMoreThenWeek:any;
    let weekDate = 0;  
  const DateAlgorithm = everyDayParseFilter ? everyDayParseFilter.filter((item:any) => item.id % 7 === 0) : null
  DateAlgorithm.length > 0 && DateAlgorithm.map((item:any)=>{
    weekDate = item.id
    passingMoreThenWeek = item.calendarDay
  }) 
  let WeekArray = everyDayParseFilter.filter((item:any)=> item.id >= weekDate)
  let WeekArrayLength = WeekArray.length     
  return {
    weekDate, 
    WeekArrayLength
  }
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
let weekNow = [];
for(let i = 0; i < 7; i++){
  let TurnBackNumber = 0 - MakeDateMoreBetter().WeekArrayLength
  const nameMonth = dayjs().format('MMMM')
  let weekDay = dayjs().add(TurnBackNumber + i, 'day').format('D')
  weekNow.push(`${weekDay} ${nameMonth}`);
}

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text:'Spend/Expenses week Info',
    },
  },
};
let CorrectWeekDay = everyDayParseFilter.filter((value:any)=>value.calendarDay > MakeDateMoreBetter().weekDate && 
value.ignore !== true)

CorrectWeekDay.push(EveryDayWeekMounthSpend().currentInfo)
const labels = weekNow.map((item)=>[item]);
 const data = {
  labels,
  datasets: [
    {
      label: 'Spend',
      data:everyDayParse ? CorrectWeekDay.map((item:any)=>[item.spend]) : null,
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Expenses',
      data:everyDayParse ? CorrectWeekDay.map((item:any)=>[item.expenses]) : null,
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
 }
return {
  data:data,
  options:options
}
}
export function StatisticWeek() {
  return <>
  <Bar options={WholeAlgoritm().options} data={WholeAlgoritm().data}/>
  </>
}
