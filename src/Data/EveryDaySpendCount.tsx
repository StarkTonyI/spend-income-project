import dayjs from "dayjs";
import { TotalSummBalanse } from "../Sider/SiderComponents/SpendBoxComponent/AllSpendDataFunction/SpendAllFunction";
import MonthLogic from "../RegulatorShiftsMonths/MonthLogic";
const EveryDayWeekMounthSpend = () => {
  let WholeExpenses = 0;
  const Expenses = localStorage.getItem('salara');
  const ParseExpenses = Expenses ? JSON.parse(Expenses) : null;
  ParseExpenses ? ParseExpenses.map((item:any)=> WholeExpenses += parseInt(item.summ)) : null
  const everyDay = localStorage.getItem('EveryDay');
  //parseInt(dayjs().format('D'))
  //parseInt(dayjs().subtract(1, 'day').format('D'))
  const currentDay = parseInt(dayjs().format('D'))
   const yesterdayDate = parseInt(dayjs().subtract(1, 'day').format('D'))
    const currentMonth = dayjs().format('MMMM')
    const everyDaySpend = everyDay ? JSON.parse(everyDay) : [
    {
        id:0,
        spend:0,
        expenses:0,
        calendarDay:yesterdayDate,
        calendarMonth:currentMonth,
        ignore:false
      }
    ]

    const PlaceParametr = everyDaySpend.length
    const LastSavingDay = everyDaySpend[PlaceParametr - 1].calendarDay
    function CorrecnMonth(){
    let value = '';
      if(currentDay - yesterdayDate > 0){
        value = currentMonth;
      }
      if(currentMonth !== everyDaySpend[PlaceParametr - 1].calendarMonth){
        value = everyDaySpend[PlaceParametr - 1].calendarMonth
      }
  return value 
  }


  function SaveRightSpend(){
        let value = 0;
        MonthLogic().TakeCurrentMonth.map((item:any)=>{
            value += item.spend       
        }) 
        return value ? value : 0
    }
    function SaveRightExpenses(){
      let value = 0;
      MonthLogic().TakeCurrentMonth.map((item:any)=>{
          value += item.expenses       
      }) 
      return value ? value : 0
  }
 
    let i = 1;
    let NumberDaysPassed= 0;
    //AddOrSubstact ? parseInt(dayjs().add (i, 'day').format('D')) === LastSavingDay
    //let AddOrSubstact = currentDay - LastSavingDay < 0 && true; 

    while(parseInt(dayjs().subtract (i, 'day').format('D')) > LastSavingDay){
    
        i++;
        NumberDaysPassed = i
       }
//console.log(dayjs().subtract (1, 'day').format('D'))
//console.log(LastSavingDay);
//console.log(NumberDaysPassed)


       //console.log(parseInt(dayjs().subtract(1, 'day').format('D')))
       //console.log(LastSavingDay)
       //console.log(NumberDaysPassed)
  //let ChangeOneDayWhileChangeMonth = currentDay - LastSavingDay < 0
  //console.log(ChangeOneDayWhileChangeMonth)
  let ChangeOneDay = NumberDaysPassed === 2
    const EveryDayPush = {
            id:PlaceParametr,
            spend:TotalSummBalanse('').Spend - SaveRightSpend(),
            expenses:WholeExpenses - SaveRightExpenses(),
            calendarDay:yesterdayDate,
            calendarMonth:CorrecnMonth(),
            ignore:false
        }
        function SaveMonthPush(month:any){
          everyDaySpend.push({
              id:PlaceParametr,
              spend:0,
              expenses:0,
              calendarDay:yesterdayDate,
              calendarMonth:month,
              ignore:true
          })
          localStorage.setItem('EveryDay', JSON.stringify(everyDaySpend))
        }

        if(ChangeOneDay){
          everyDaySpend.push(EveryDayPush)
          localStorage.setItem('EveryDay', JSON.stringify(everyDaySpend))
          setTimeout(()=>{
            window.location.reload()
          },500)
           }
           //console.log(NumberDaysPassed)
        if(NumberDaysPassed > 2){
          //console.log('suca i work')
          let number = 0;
          while(NumberDaysPassed - number >= 0){
            number++
            everyDaySpend.push({
              id:PlaceParametr + number,
              spend:0,
              expenses:0,
              calendarDay:parseInt(dayjs().subtract(NumberDaysPassed - number, 'day').format('D')),
              calendarMonth:currentMonth,
              ignore:false
          })
        } 
            setTimeout(()=>{
              localStorage.setItem('EveryDay', JSON.stringify(everyDaySpend))   
              window.location.reload()
            },1000)
          }
          //console.log(NumberDaysPassed)
  localStorage.setItem('EveryDay', JSON.stringify(everyDaySpend))
 // console.log(everyDaySpend)
  let info = {
    currentInfo:EveryDayPush,
    AllInformation:everyDaySpend,
    save:SaveMonthPush
  }
  return info
}
export default EveryDayWeekMounthSpend







