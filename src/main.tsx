import ReactDOM from 'react-dom/client'
import './index.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AllLayout } from './Layout/Layout';
import  UserInfo  from './UsersInfo/UserMain';


ReactDOM.createRoot(document.getElementById('root')!).render(
<Router>
    <Routes>
      <Route path="/" element={<UserInfo />} />
      <Route path="/spend-income-project/main" element={<AllLayout />} />
    </Routes>
  </Router>
)
