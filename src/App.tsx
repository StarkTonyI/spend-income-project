import { Routes, Route } from 'react-router-dom';
import { AllLayout } from './Layout/Layout';
import  UserInfo  from './UsersInfo/UserMain';

function App() {
  
  return( 
    <Routes>
      <Route path="/"  element={<UserInfo/>}></Route>
    <Route path="/spend-income"  element={<AllLayout/>}></Route>
  </Routes>
  )
}

export default App
