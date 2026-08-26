import { Routes, Route, Navigate } from 'react-router-dom'; 
import Signup from '../pages/signup/SignupForm';
import Signin from '../pages/signin/SigninForm';
import LandingPage from '../pages/landing_page/Landingpage';
import Dashboard from '../pages/dashboard/Dashboard';

import '../components/styles/app.css';

function App() {   
  return (     
    <Routes>       
      <Route path="/landingpage" element={<LandingPage />} />       

      <Route path="/auth/register" element={<Signup />} />       
      
      <Route path="/auth/login" element={<Signin />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/" element={<Navigate to="/landingpage" replace />} />   
        
    </Routes>   
  ); 
}

export default App;