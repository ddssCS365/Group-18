import React from 'react';
import { useNavigate } from 'react-router-dom';
//import './Login.css'; // (optional styling)

function Login() {
  const navigate = useNavigate();

  const handleLogin = (role) => {
    if (role === 'admin') navigate('/admin');
    if (role === 'therapist') navigate('/therapist');
    if (role === 'patient') navigate('/patient');
  };

  return (
    <div>
      <h2>Login</h2>
      <p>Select your role:</p>
      <button onClick={() => handleLogin('admin')}>Admin</button>
      <button onClick={() => handleLogin('therapist')}>Therapist</button>
      <button onClick={() => handleLogin('patient')}>Patient</button>
    </div>
  );
}

export default Login;
