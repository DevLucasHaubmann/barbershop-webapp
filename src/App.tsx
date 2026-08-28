import { Routes, Route, Navigate } from 'react-router-dom';
import Signup from './components/signup/SignupForm';

function App() {
  return (
    <Routes>
      <Route path="/auth/register" element={<Signup />} />
      <Route path="/" element={<Navigate to="/auth/register" replace />} />
    </Routes>
  );
}

export default App;
