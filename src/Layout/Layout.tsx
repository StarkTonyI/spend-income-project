import { Layout, Flex } from 'antd';
import { HeaderSide } from '../Header/Header';
//import { ContentSide } from './Contents';
import { SiderSide } from '../Sider/Sider';
import ContentSider from './ContentSider';
import { ButtonProvider } from '../Context/Context'; 
const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  width: '100%',
  maxWidth: '100%',
};

 
  
export function AllLayout(){

  return(
<ButtonProvider>
  <Flex gap="middle" wrap="wrap">
    <Layout style={layoutStyle}>
      <SiderSide/>
        <Layout>
          <HeaderSide/>
          <ContentSider/>
        </Layout>
      </Layout>
  </Flex>
</ButtonProvider>
)
}