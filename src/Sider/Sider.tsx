import { Layout } from 'antd'
import React from 'react';
import type { SelectProps } from 'antd';
import SiderSpendComponent from './SiderComponents/SiderComponentSpend';


const { Sider } = Layout;

const siderStyle: React.CSSProperties = {
    textAlign: 'center',
    lineHeight: '100%',
    color: '#fff',
    backgroundColor:'#003d55',
  };


export function SiderSide(){
 

    return(
    <Sider width="30%" style={siderStyle}>
      <SiderSpendComponent/>
      </Sider>
 )}
   

