import React, { useState } from 'react';
import "../components/login.css";


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

    const handleLogin = () => {
      if (username === 'admin' && password === 'password') {
        alert('Login successful');
      } else {
        alert('Login failed');
      }
    };
    const handlesignup = () => {
     window.location.href='signup';
    };

  return (
  
  <>    <div className="login-container">
      <h2>Login</h2>   
      <form className="login-form">
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Login
        </button>

        <button id='bt2' type="button" onClick={handlesignup}>
          Sign Up
        </button>
        
       
      </form>
    </div>
    </>
  );
}

export default Login;
