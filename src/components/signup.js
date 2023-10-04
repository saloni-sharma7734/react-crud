import React,{useState} from 'react';
import'./signup.css'

function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
      const handleLogin = () => {
      window.location.href='login';
      };
      const handlesignup = () => {
       alert('signup successful');
      };
  
    return (
    
    <>    
    <div className="signup-container">
        <h2>Signup</h2>   
        <form className="signup-form">
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
  
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Moblie Number:</label>
            <input type="number" id="number" value={password} ></input>
          </div>
          <div>
            <label htmlFor="Username">Username:</label>
            <input type="text" id="username"  
            />
          </div>
          <button type="button" onClick={handleLogin} >
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
  
  export default Signup;
  