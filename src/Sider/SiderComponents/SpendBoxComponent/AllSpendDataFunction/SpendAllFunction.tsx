import SpendData from "../../../../Data/SpendData";
import { SalaraData } from "../../../../Data/SalaraData";

let valueParam:number;

export function MoneyBalanse(){
  const ParseMyMoney:string | null = localStorage.getItem('money');
  let value = ParseMyMoney ? JSON.parse(ParseMyMoney) : null
  return value
}

export const AllSpendDataFunction = (value:number) => {
  valueParam = value;  
}

export const ExpensesData = () => {
  let Money = '';
    Money = MoneyBalanse() ? MoneyBalanse().money : 0
  let ClearMoney = parseInt(Money);
  return ClearMoney
}

export const SpendDataFunction = () => {    
    let SpendMoney = 0;
        for(let i = 0; i < SpendData.length; i++){
          SpendMoney += parseInt(SpendData[i].summ)
        }
        return SpendMoney
      }

export const TotalSummBalanse = (param:any) =>{

  let TotalValue:number
    let TotalSpend:number
        
    const LocalResult:string | null = localStorage.getItem('AllParametrOfBalanse')
    const AllTotalValue = LocalResult ? JSON.parse(LocalResult) : []
    
      if(valueParam){
        AllTotalValue.push({SpendFromSpendBox:valueParam})
      }

      let AllSumm = 0
      for(let i = 0; i < AllTotalValue.length; i++){
       
      AllSumm += AllTotalValue[i].SpendFromSpendBox
      }
  
      param ? localStorage.setItem('AllParametrOfBalanse', JSON.stringify(AllTotalValue))  : null
      
      let SalaraSumm = 0;
      SalaraData.map((item)=>{
        let ParseValue = parseInt(item.summ)
        SalaraSumm += ParseValue
      })
      
        TotalValue = (ExpensesData() - SpendDataFunction()) + SalaraSumm;     
        TotalSpend = SpendDataFunction()
  
  let WholeYourBalanse = {
  Expenses:TotalValue - AllSumm,
  Spend:TotalSpend + AllSumm
  }


return WholeYourBalanse
 
   }    


