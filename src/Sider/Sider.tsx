import { Layout } from 'antd'
import React from 'react';
import type { SelectProps } from 'antd';
import { Select, Space } from 'antd';
import SiderSpendComponent from './SiderComponents/SiderComponentSpend';


const { Sider } = Layout;

const siderStyle: React.CSSProperties = {
    textAlign: 'center',
    lineHeight: '100%',
    color: '#fff',
    backgroundColor:'#003d55',
  };

  const options: SelectProps['options'] = [
    {
      label: 'China',
      value: 'china',
      emoji: '🇨🇳',
      desc: 'China (中国)',
    },
    {
      label: 'USA',
      value: 'usa',
      emoji: '🇺🇸',
      desc: 'USA (美国)',
    },
    {
      label: 'Japan',
      value: 'japan',
      emoji: '🇯🇵',
      desc: 'Japan (日本)',
    },
    {
      label: 'Korea',
      value: 'korea',
      emoji: '🇰🇷',
      desc: 'Korea (韩国)',
    },
  ];

  
  const handleChange = (value: string[]) => {
    console.log(`selected ${value}`);
  };

export function SiderSide(){
 

    return(
    <Sider width="30%" style={siderStyle}>
      <SiderSpendComponent/>
      </Sider>
 )}
   

