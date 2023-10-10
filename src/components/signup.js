import React, { useState,useEffect } from "react";
// import React, { useState, useEffect } from 'react';
import "../components/signup.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import axios from "axios";
function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);

  const handleLogin = () => {
    window.location.href = "login";
  };
  const handlesignup = () => {
    window.location.href = "login";
  };

  // const getData = () => {
  //     axios.get("http://localhost:4000/user/getall").then((data) => {
  //       console.log(data,"data5656")
  //   setData(data?.data || [])
  //     });
  //   };
  // useEffect(() => {
  //   getData()

  //   // axios.get('/api/someEndpoint')
  //   //   .then(response => {
  //   //     setData(response.data);
  //   //   })
  //   //   .catch(error => {
  //   //     // Handle errors
  //   //   });
  // }, []); // Empty dependency array means this effect runs once on component mount

  return (
    <>
    <div className="bg-img">
      <div className="signup-container">
        <form className="signup-form">
          <div className="row">
            <div className="col">
              <label>
                <h2>Signup</h2>{" "}
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="name">Name:</label>
            </div>
            <div className="col">
              <input
                type="text"
                id="name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label htmlFor="password">Password:</label>
            </div>
            <div className="col">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
            <label htmlFor="number">Number:</label></div>
            <div className="col"><input type="tel" id="number"></input></div>
          </div>
          <div className="row">
            <div className="col">
            <label htmlFor="Age">Age:</label></div>
            <div className="col"><input type="tel" id="age"></input></div>
          </div>
          <div className="row">
            <div className="col">
            <label htmlFor="username">Username:</label></div>
           <div className="col"> <input type="text" id="username" /></div>
          </div>
          <div className="row">
            <div className="col">
            <label htmlFor="Username">Sex:</label></div>
           <div className="col"> <input type="text" id="username" /></div>
          </div>
          <div className="row">
            <div className="col">
            <label htmlFor="Username">Location:</label></div>
           <div className="col"> <input type="text" id="username" /></div>
          </div>
          <button id="bt2" type="button" onClick={handlesignup}>
            Sign Up
          </button>

          <button type="button" onClick={handleLogin}>
            Login
          </button>

        
        </form>
      </div>
      </div>
    </>
  );
}

export default Signup;
