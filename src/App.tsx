import { Routes, Route, Navigate } from 'react-router-dom'; 
import Signup from './components/signup/form-signup';
import Signin from './components/signin/form-signin'; 

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