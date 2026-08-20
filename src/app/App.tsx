import { Routes, Route, Navigate } from 'react-router-dom'; 
import Signup from '../features/components/signup/SignupForm';
import Signin from '../features/components/signin/SigninForm';
import '../components/styles/app.css';

function App() {   
  return (     
    <Routes>       
      <Route path="/auth/register" element={<Signup />} />       
      
      <Route path="/auth/login" element={<Signin />} />

      <Route path="/" element={<Navigate to="/auth/login" replace />} />     
    </Routes>   
  ); 
}

export default App;