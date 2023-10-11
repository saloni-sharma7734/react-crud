import React from 'react'
// import myimage1 from './img1.png';
import Sidebar from '../Sidebar';

export default function Dashboard(){
  const user = JSON.parse(localStorage.getItem('user'));
  const name = user.name;
  const [dspname] = name.split(' ');
  return (
    <>
    <Sidebar />
    <div className="container-fluid my-lg-5">
    <p align = "center" className='heading'>Welcome Back, {dspname}</p>
    </div>
    </>
  );
}

