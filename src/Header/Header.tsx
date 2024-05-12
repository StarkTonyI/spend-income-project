import { Layout } from 'antd';
import Transition from '../Context/Context';
import  FunctionalPictureDate  from './Imagine/FunctionalPictureDate';
import FunctionalPicture from './Imagine/FunctionalPicture';
const { Header } = Layout;
  export default Transition
const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: '50px',
    paddingInline: 48,
    lineHeight: '100%',
    backgroundColor:'#868679',
}

export function HeaderSide(){

 return <Header style={headerStyle}>
      <div className='box-img'>
        {FunctionalPictureDate.map((item:any, index:any)=>(
   <FunctionalPicture sourse={item.source} ClickFunctional={item.clickName} 
   className={item.className} key={index}
    link={item.link}
   /> 
   
  ))
   
        }

  </div>
    </Header>
}