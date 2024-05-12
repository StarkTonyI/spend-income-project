import dayjs from "dayjs";
import EveryDayWeekMounthSpend from "../Data/EveryDaySpendCount";
import { DeleteAfterChangeMonth } from "../DeleteEverything/DeleteEverything";
import MonthLogic from "./MonthLogic";
const MonthShiftsRegulate = () => {



const yestermonthDate = dayjs().subtract(1, 'month').format('MMMM')


let Spend = 0;
let Expenses = 0
let MonthBase = localStorage.getItem('month')
MonthLogic().TakeCurrentMonth.forEach((item:any)=>{
  Spend += item.spend
  Expenses += item.expenses
})


let MonthDateBase = MonthBase ? JSON.parse(MonthBase) : [];

  let CurrentMonthDate = {
    spend:Spend + EveryDayWeekMounthSpend().currentInfo.spend,
    expenses:Expenses + EveryDayWeekMounthSpend().currentInfo.expenses
  }

  if(MonthLogic().MonthSignal !== MonthLogic().currentMonth){
        MonthDateBase.push(CurrentMonthDate)
        EveryDayWeekMounthSpend().save(MonthLogic().currentMonth)
        localStorage.setItem('month', JSON.stringify(MonthDateBase)) 
        EveryDayWeekMounthSpend()
        setTimeout(()=>{
          DeleteAfterChangeMonth()
          window.location.reload();
        },1000)
  
            }
      if(yestermonthDate === ''){

      }
      return {
        CurrentMonthDate, 
        MonthDateBase
    }
   


}
export default MonthShiftsRegulate