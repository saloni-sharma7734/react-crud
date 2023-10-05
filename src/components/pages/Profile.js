import React from 'react'
import myimage1 from './img1.png';

export default function Profile(){
    const fstyle ={
        borderRadius: '30px',
    };

  return (
    <>

    <div className="container-fluid my-lg-5 profile">
      <form>
      <div className="form-group">
                <img src={myimage1}/><label for="image">&nbsp;<b>Profile Image</b></label><br/>
                <p>&nbsp;</p>
                <input type="file" className="form-control-file"  id="image" accept="image/*" alt="profile_img"/>
            </div>
            <div className="form-group my-2">
                <label for="username" className="headings"><b>Name</b></label><br/>
                <input type="text" className="form-control my-2" id="username" style={fstyle} placeholder="Enter your name"/>
            </div>
            <div className="form-group my-2">
                <label for="email" className="headings"><b>User Name</b></label><br/>
                <input type="text" className="form-control my-2" id="email" style={fstyle} placeholder="Enter your username"/>
            </div>
            <div className="form-group my-2">
                <label for="pnumber" className="headings"><b>Phone Number</b></label><br/>
                <input type="number" className="form-control my-2" id="pnumber" style={fstyle} placeholder="Enter your phone number"/>
            </div>
            <div className="form-group my-2">
                <label for="email" className="headings"><b>Email id</b></label><br/>
                <input type="email" className="form-control my-2" id="email" style={fstyle} placeholder="v@gmail.com"/>
            </div>
            <div className="form-group my-2">
                <label for="dob" className="headings"><b>Select your DOB</b></label><br/>
                <input type="date" className="form-control my-2" id="dob" style={fstyle} />
            </div>
            <div className="form-group my-2">
                <label for="city" className="headings"><b>City</b></label><br/>
                <input type="text" className="form-control my-2" id="blogTitle" style={fstyle} placeholder="Enter your city name"/>
            </div>
            <div className="form-group my-2">
                <label for="state" className="headings"><b>State</b></label><br/>
                <input type="text" className="form-control my-2" id="state" style={fstyle} placeholder="Enter your state"/>
            </div>
            <div className="form-group my-2">
                <label for="country" className="headings"><b>Country</b></label><br/>
                <input type="text" className="form-control my-2" id="country" style={fstyle} placeholder="Enter your country"/>
            </div>
            <button type="submit" className="btn btn-primary">Update</button> &nbsp;
            <button type="submit" className="btn btn-primary">Back</button>
        </form>
    </div>
    </>
  );
}

