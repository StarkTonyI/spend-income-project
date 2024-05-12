import React from 'react'
import './ButtonEventStyle.css'
import { TotalSummBalanse } from '../../Sider/SiderComponents/SpendBoxComponent/AllSpendDataFunction/SpendAllFunction'

interface ButtonEvent {
    click:(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
    name:string
}

const ButonEvent:React.FC<ButtonEvent> = ({click, name}) => {
    return(
<div className="main" onClick={click}>
  <div className="buttons">
    <div className="button_pair">
      <div className="btn">
        <button className="button4">
          <span className="button_text">{name}</span>
        </button>
      </div>
    </div>
  </div>
</div>

    )
}
interface ButtonSpend {
    click:(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
    name:string
    signal:boolean
}

export const ButtonSpend:React.FC<ButtonSpend> = ({click, name, signal}) => {

  if(signal){
    setTimeout(()=>{
      window.location.reload()
    }, 200)
  }
  TotalSummBalanse(signal)

    

    return(
        <div className="main" onClick={click}>
          <div className="buttons">
            <div className="button_pair">
             <div className="btn">
              <button className="button3">
                <span className="button_text">{name}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

    )
}

export default ButonEvent
