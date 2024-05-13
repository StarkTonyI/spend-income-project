import { Routes, Route } from 'react-router-dom';
import { AllLayout } from './Layout/Layout';
import  UserInfo  from './UsersInfo/UserMain';

function App() {
  
  return( 
    <Routes>
<Route path="/spend-income-project" element={<UserInfo/>} />
<Route path="/spend-income-project/main" element={<AllLayout/>} />

  </Routes>
  )
}

export default App
