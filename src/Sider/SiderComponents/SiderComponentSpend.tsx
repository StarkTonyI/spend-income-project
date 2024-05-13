import { useContext, useState } from 'react';
import './Sider.css'
import dayjs from 'dayjs';
import SpendBox from './SpendBox'; 
import SpendData, {SpendItem} from '../../Data/SpendData';
import SalaraBoxAll from './SalaraBoxComponent/SalaraComponent';
import { TotalSummBalanse, MoneyBalanse} from '../../Sider/SiderComponents/SpendBoxComponent/AllSpendDataFunction/SpendAllFunction'
import Block from '../../Block/Block';
import ButtonContext from '../../Context/Context'

export default function SpendAllBox(){


  const [passInfo, setPassInfo] = useState<SpendItem | undefined>(undefined)
  const { setPassSignal } = useContext(ButtonContext)
  //const { refresh } = useContext(ButtonContext)


  const handleButtonClick = (clickedItem: SpendItem) => {
    setPassInfo(clickedItem)
  }
  const [salara,setSalara] = useState(false)
  const currentDate = dayjs();

  // Display the day and month
    const formattedDateMonth = currentDate.format('D MMMM');
    const filteredEvenData: SpendItem[] =   SpendData.filter((item)=> item.id % 2 !== 0) 
    const filterOddData:SpendItem[] = SpendData.filter((item) => item.id % 2 === 0 ) 

    function SpendFunction(){
          setSalara(false)
      setPassSignal(false)
        }
        function SalaraFunction(){
          setPassSignal(true)
          setSalara(true)
        }

return(
<>
<h1  style={{fontSize:'55px', marginTop:'20px'}}>{formattedDateMonth}</h1>
<div className='box-salara-info'>                 
<p onClick={()=>SalaraFunction()} className='p'>{TotalSummBalanse('').Expenses}{MoneyBalanse().icon}</p>
<p className='salara' onClick={()=>SpendFunction()}>{TotalSummBalanse('').Spend}{MoneyBalanse().icon}</p>   
</div>
{salara && <SalaraBoxAll/>}

 {!salara && <div className='conteiner'>
<div style={{width:'200px'}}>
{filteredEvenData.map((item:SpendItem)=>(
    <Block item={item} onClick={handleButtonClick} key={item.id}/>
    ))}
</div> 
<div style={{width:'200px'}}>
{filterOddData.map((item:SpendItem)=>(
    <Block item={item} onClick={handleButtonClick} key={item.id}/>
    ))}
</div>
</div>}

<SpendBox passInfo={passInfo} setPassInfo={setPassInfo}/>  

</>
)}
