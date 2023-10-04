import React from "react";
import image1 from "../vidhema-logo-black.png";
import avatar from "../avatar.jpg"
export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <img src={image1} alt="" className="mt-5 mb-5 mx-3" />
        <a className="active" href="#home" className="sidenav">
          DASHBOARD
        </a>
        <a href="#news">PROFILE</a>
        <a href="#contact">PROJECT</a>
        <a href="#about">BLOG</a>
      </div>
      <div className="avatar">
        <button className="btn btn-primary p-2 px-3">Logout</button>
        <img src={avatar} alt="avatar"></img>
      </div>
    </>
  );
}

