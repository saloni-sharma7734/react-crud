import React, { useEffect, useState } from "react";
import axios from "axios";
import myimage1 from "./img1.png";
import Sidebar from "../../Sidebar";
export default function Profile() {
  const fstyle = {
    borderRadius: "30px",
  };

  const [name, setName] = useState()

  // const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [mobile, setMobile] = useState("");
  const [age, setAge] = useState("");
  const [username, setUsername] = useState("");
  const [state, setState] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  useEffect(() => {

    axios.get('http://localhost:4000/profile/getall')
      .then((data) =>
        console.log(data.data)
      ).catch((err) => console.log(err))

    // axios.get('/api/someEndpoint')
    //   .then(response => {
    //     setData(response.data);
    //   })
    //   .catch(error => {
    //     // Handle errors
    //   });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:4000/profile/profileupdate/${username}`, { name, username, mobile, email, age, city, state, country })
      .then((result) => { console.log(result) })
      .catch(err => { console.log(err) });

  };
  return (
    <>
      {/* <div className="container-fluid"> */}
      <Sidebar />
      <div className="container my-lg-5 profile">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <img src={myimage1} alt=".." />
            <label for="image">
              &nbsp;<b>Profile Image</b>
            </label>
            <br />
            <input
              type="file"
              className="form-control-file"
              id="image"
              accept="image/*"
              alt=""

            />
          </div>
          <div className="form-group my-2">
            <label for="username" className="headings">
              <b>Name</b>
            </label>
            <br />
            <input
              type="text"
              className="form-control my-2"
              id="username"
              style={fstyle}
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group my-2">
            <label for="email" className="headings">
              <b>User Name</b>
            </label>
            <br />
            <input
              type="text"
              className="form-control my-2"
              id="email"
              style={fstyle}
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group my-2">
            <label for="pnumber" className="headings">
              <b>Phone Number</b>
            </label>
            <br />
            <input
              type="tel"
              className="form-control my-2"
              id="pnumber"
              style={fstyle}
              placeholder="Enter your phone number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
          <div className="form-group my-2">
            <label for="email" className="headings">
              <b>Email id</b>
            </label>
            <br />
            <input
              type="email"
              className="form-control my-2"
              id="email"
              style={fstyle}
              placeholder="v@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group my-2">
            <label for="dob" className="headings">
              <b>Select your DOB</b>
            </label>
            <br />
            <input
              type="date"
              className="form-control my-2"
              id="dob"
              style={fstyle}
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="form-group my-2">
            <label for="city" className="headings">
              <b>City</b>
            </label>
            <br />
            <input
              type="text"
              className="form-control my-2"
              id="blogTitle"
              style={fstyle}
              placeholder="Enter your city name"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="form-group my-2">
            <label for="state" className="headings">
              <b>State</b>
            </label>
            <br />
            <input
              type="text"
              className="form-control my-2"
              id="state"
              style={fstyle}
              placeholder="Enter your state"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
          <div className="form-group my-2">
            <label for="country" className="headings">
              <b>Country</b>
            </label>
            <br />
            <input
              type="text"
              className="form-control my-2"
              id="country"
              style={fstyle}
              placeholder="Enter your country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Update
          </button>
          &nbsp;
          <button type="reset" className="btn btn-primary">
            Back
          </button>
        </form>
      </div>
      {/* </div> */}
    </>
  );
}
