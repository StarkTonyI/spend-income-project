import { MoneyBalanse } from '../Sider/SiderComponents/SpendBoxComponent/AllSpendDataFunction/SpendAllFunction';
import dollars from '../icons/Dollar.png'

import euro from '../icons/Euro.png'
import ruble from '../icons/Ruble.png'
    export interface SalaraBox{
    id:number;
    name:string;
    summ:string;
    icon:string,
    date:string,
    link:string
    linkName:string
}

const SalaradDataLocal:string | null = localStorage.getItem('salara');

export function SalaraCurrencyIcon() {
  let name = '';
  let value = '';
  let link;
  let CorrectWork = MoneyBalanse() ? MoneyBalanse().currency : 'USD'
   switch(CorrectWork){
      case 'USD':{
        value = dollars}
        link = "https://www.flaticon.com/free-icons/money-sign" 
        name = 'Money sign icons created by Good Ware-Flaticon'
        break;
      case 'EUR':{
        value = euro
        link = 'https://www.flaticon.com/free-icons/euro'
        name = 'Euro icons created by riajulislam-Flaticon'
      }
      break;
      case 'RUB':{
        value = ruble
      link = 'https://www.flaticon.com/free-icons/ruble'
        name = 'Ruble icons created by Freepik-Flaticon'
    }
      break;
      default:{
        value = dollars
        link ='https://www.flaticon.com/free-icons/money-sign'
        name = 'Money sign icons created by Good Ware-Flaticon'
      }
  }

  return {
    value,
    link,
    name
  }

}

export const SalaraData:SalaraBox[] = SalaradDataLocal ? JSON.parse(SalaradDataLocal) : [{
  id:1,
  name:'Create',
  summ:0,
  icon:SalaraCurrencyIcon().value,
  link:SalaraCurrencyIcon().link,
  linkName:SalaraCurrencyIcon().name
}]
