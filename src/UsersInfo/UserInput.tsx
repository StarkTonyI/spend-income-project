import React from "react"
import styles from './UserStyle/UsersStyle.module.scss';
interface InputUser{
    placeholder:string,
    onChange:(event:any)=> void
    disabled:boolean,
    DivClick:(value:any) => void;
    name:string
    value:string | number | undefined
}
const InputUser:React.FC<InputUser> = ({placeholder, onChange, disabled, DivClick, name, value}) => {
    return(
<div onClick={()=>DivClick(name)}>
    <div className={styles.container}>
        <div className={styles.webflow}>
            <input disabled={disabled} type="email" placeholder={placeholder} onChange={onChange} value={value}/>
        </div>
    </div>
</div>   
    )
}
export default InputUser