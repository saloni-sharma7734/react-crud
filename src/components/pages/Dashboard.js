import React from 'react'
// import myimage1 from './img1.png';
import Sidebar from '../Sidebar';

export default function Dashboard(props){
  return (
    <>
    <Sidebar />
    <div className="container-fluid my-lg-5">
    <p align = "center" className='heading'>Welcome Back, {props.name}</p>
    </div>
    </>
  );
}

