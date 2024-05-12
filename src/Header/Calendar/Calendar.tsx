import React, { useEffect, useState } from 'react';
import { DatePicker, Space } from 'antd';
import type { DatePickerProps } from 'antd';
import CalendarModalInfo from './CalendarModal/CalendarModalInfo';
import SavingCalendar from './CalendarModal/SavingCalendarData.tsx/SavingCalendar';

interface ModalOpen {
  modalOpen:React.Dispatch<React.SetStateAction<boolean>>
  setPassingSignal:React.Dispatch<React.SetStateAction<boolean>>
}



const DatePickerCalendar: React.FC<ModalOpen> = ({modalOpen, setPassingSignal}) => {

  const [checkValue, setCheckValue] = useState<boolean>(false)


  const [dateValue, setDateValue] = useState('');
  const onChange = (
    value: DatePickerProps['value'],
    dateString: [string, string] | string,
  ) => {
''
  };
  const onOk = (value: DatePickerProps['value']) => {
    if(value){
    setDateValue(value?.format('DD/MM/YYYY'))
    }
  };
  useEffect(()=>{
    checkValue ? modalOpen(false) : null
  }, [modalOpen, checkValue])
  useEffect(()=>{
    setPassingSignal(checkValue)
  }, [checkValue])
 return(
  <div style={{display:'flex', justifyContent:'space-between'}}> 
    <div>
<Space direction="vertical" size={12}>
  <DatePicker showTime onChange={onChange} onOk={onOk}/>
</Space>
  <CalendarModalInfo dateValue={dateValue} passingIndicate={checkValue}
     mainpulateIndicate={setCheckValue}/>
  </div>
<div style={{marginRight:'30px'}}>
  <SavingCalendar passingCalendar={setCheckValue}/>
</div>
</div>
 )
}
export default DatePickerCalendar;