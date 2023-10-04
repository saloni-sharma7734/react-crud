import React, { useState } from 'react';
import './login.css'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

    const handleLogin = () => {
      if (username === 'admin' && password === 'password') {
        console.log('Login successful');
      } else {
        console.log('Login failed');
      }
    };

  return (
  
  <>
  <nav id="sidebar" class="col-md-3 col-lg-2 d-md-block bg-light sidebar">
    <div class="position-sticky">
        <ul class="nav flex-column">
            <li class="nav-item">
                <a class="nav-link active" href="#">
                    Dashboard
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                    Products
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                    Orders
                </a>
            </li>
          
        </ul>
    </div>
</nav>



    <div className="login-container">
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

        <button id='bt2' type="button" onClick={handleLogin}>
          Sign Up
        </button>
      </form>
    </div>
    </>
  );
}

export default Login;
