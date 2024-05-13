import { Routes, Route } from 'react-router-dom';
import { AllLayout } from './Layout/Layout';
import  UserInfo  from './UsersInfo/UserMain';

function App() {
  
  return( 
    <Routes>
      <Route path='/spend-income-project/' element={<UserInfo/>}></Route>
    <Route path ='https://starktonyi.github.io/spending-income/' element={<AllLayout/>}></Route>
  </Routes>
  )
}

export default App
