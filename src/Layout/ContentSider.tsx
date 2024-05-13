import { Layout } from 'antd';
const { Content } = Layout
import ModalFunction from '../ModalComponent/SelfModal/SelfModel';
import ModalComponent from '../ModalComponent/ModalCompont';
import { PieFunction } from '../Header/PieChart/PieChart';
import { useContext, useState } from 'react';
import ButtonContext from '../Context/Context';
import { StatisticWeek } from '../Header/Statistic/StatisticWeek';
import { StatisticMonth } from '../Header/Statistic/StatisticMonth';
import WeekMonthButton from '../Button/WeekMonthButton/WeekMonthButton';
const contentStyle: React.CSSProperties = {
  alignItems:'center',
  justifyContent:'center',
  display:'flex',
  color: '#fff',
  height:'600px',
  backgroundColor: '#12255c',
};

  const ContentSider = () => {
    const [nameButton,setNameButton] = useState('')
    //const { passSignal } = useContext(ButtonContext);
    const { selectedButton } = useContext(ButtonContext);
    const ChangeStatistic = selectedButton === 'Bar-Chart'
    const [passingSignal, setPassingSignal] = useState(false);
    //useEffect(()=>{
      //setTimeout(()=>{
        //MonthShiftsRegulate()
      //}, 1000) 
    //},[])
   


    return(
<Content style={contentStyle}>
  {ChangeStatistic &&  
  <div style={{width:'100%', height:'100%'}}> 
  <div style={{display:'flex', flexDirection:'row'}}>
  <WeekMonthButton name='Week' setNameButton={setNameButton}/>
  <WeekMonthButton name='Month' setNameButton={setNameButton}/>
  </div>
  {nameButton === 'Week' && <StatisticWeek/>}
  {nameButton === 'Month' && <StatisticMonth/>}
  </div>
  }
  {!ChangeStatistic && <PieFunction/>}
  <ModalComponent setPassingSignalValue={setPassingSignal}/>
  <ModalFunction value={passingSignal} setPassingSignal={setPassingSignal}/>
</Content>
    )
  }

    



export default ContentSider