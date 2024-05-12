import dayjs from "dayjs";

const MonthLogic = () => {
    const currentMonth = dayjs().format('MMMM')
    const everyDay = localStorage.getItem('EveryDay')
const everyDayParse = everyDay ? JSON.parse(everyDay) : [];
const everyDayParseFilter = everyDayParse ? everyDayParse.filter((item:any)=>item.id > 0) : [];
const everyDayParseLength = everyDayParse ? everyDayParse.length : null;
let MonthSignal = everyDayParse.length > 1 ? everyDayParse[everyDayParseLength - 1].calendarMonth : currentMonth
let TakeCurrentMonth = everyDayParseFilter.filter((item:any)=> item.calendarMonth === 
everyDayParse[everyDayParseLength - 1].calendarMonth)
return {
    MonthSignal,
    TakeCurrentMonth,
    currentMonth
}
}
export default MonthLogic