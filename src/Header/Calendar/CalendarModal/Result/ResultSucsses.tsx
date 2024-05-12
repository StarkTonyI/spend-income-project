import React from 'react';
import { Button, Result } from 'antd';

interface ResultDate{
  ResultDate:string | number
}

const ResultSucsses: React.FC<ResultDate> = ({ResultDate}) =>{

return( 
<>
<Result
    status="success"
    title="Date information passed, you can check it in 'SAVING DATE'"
  />
  <h1 style={{marginLeft:'50px', fontSize:'35px', fontWeight:'bold',
   marginTop:'-35px', paddingBottom:'50px'}}>{`Date saving:${ResultDate}`}</h1>
</>
)
}
export default ResultSucsses;