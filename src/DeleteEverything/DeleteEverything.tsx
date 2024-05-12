const DeleteEverything = () => {
    localStorage.removeItem('data')
    localStorage.removeItem('salara')
    localStorage.removeItem('PlanSpend')
    localStorage.removeItem('DayLimit')
    localStorage.removeItem('MonthLimit')
    localStorage.removeItem('WeekLimit')
    localStorage.removeItem('AllParametrOfBalanse')
    localStorage.removeItem('EveryDay');
    localStorage.removeItem('money')
    localStorage.removeItem('month')
   
}
export default DeleteEverything

export const DeleteAfterChangeMonth = () => {
    localStorage.removeItem('data')
    localStorage.removeItem('EveryDay');
    localStorage.removeItem('AllParametrOfBalanse')
}