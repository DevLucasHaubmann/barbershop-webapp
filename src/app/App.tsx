import { Routes, Route, Navigate } from 'react-router-dom'; 
import Signup from '../features/components/signup/SignupForm';
import Signin from '../features/components/signin/SigninForm';
import '../components/styles/app.css';
import LandingPage from '../features/components/landingpage/Landingpage';

function App() {   
  return (     
    <Routes>       
      <Route path="/landingpage" element={<LandingPage />} />       

      <Route path="/auth/register" element={<Signup />} />       
      
      <Route path="/auth/login" element={<Signin />} />

      <Route path="/" element={<Navigate to="/landingpage" replace />} />     
    </Routes>   
  ); 
}

export default App;