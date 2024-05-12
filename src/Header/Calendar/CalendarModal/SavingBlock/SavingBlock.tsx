import React from 'react'
import './SavingBlockStyle.css'
import DeleteButton from '../../../../Button/DeleteButton/DeleteButtonCalendar'

interface SavingBlock {
   item:any
   Cause:any
}

const SavingBlock:React.FC<SavingBlock> = ({item, Cause}) => {
 
 
    return(
   <div> 
        <div className="card">
             <div className="align">
            <span className="red"></span>
            <span className="yellow"></span>
            <span className="green"></span>
        </div>
        <h1 style={{fontSize:'25px', fontWeight:'bold', marginTop:'-10px'}}>{item?.date}</h1>
        <div>
            <p style={{fontSize:'20px'}}>Summ:{item?.summ}$</p>
            <p style={{fontSize:'20px'}}>For:{item?.cause}</p>
        </div>
    </div>
    <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}> 
    <DeleteButton item={item.cause} value={Cause}/> 
    </div>
    </div>

    )

}

export default SavingBlock