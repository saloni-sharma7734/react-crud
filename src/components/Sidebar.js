import React from "react";
import image1 from "../Logo.png";
import avatar from "../avatar.jpg";
import dash from "../dash.svg";
// import nft from "../nft.png";
import table from "../table.png";
import kanban from "../kanban.png";
import profile from "../profile.png";
// import sign from "../sign.png";
import notify from "../notification.png";
import dark from "../dark-mode.png";
import info from "../info.png";
// import Profile from "./pages/Profile";
import { Link } from "react-router-dom";
export default function Sidebar() {
  const handleLogout = () => {};
  return (
    <>
      <div className="container-fluid d-flex">
        <div className="sidebar">
          <img src={image1} alt="" className="mt-4 mb-5 mx-4 px-1" />
          <Link className="" to="/dashboard">
            <img src={dash} alt=".." />
            DASHBOARD
          </Link>
          <Link to="/blog">
            <img src={table} alt=".." />
            BLOG
          </Link>
          {/* <Link to="/Home">
            <img src={kanban} alt=".." />
            logout
          </Link> */}
          <Link to="/profile">
            <img src={profile} alt=".." />
            PROFILE
          </Link>
          {/* <a href="#news">
            <img src={sign} alt=".." />
            Sign in
          </a> */}
        </div>
        <div className="cover"></div>
      </div>
      <div className="avatar">
        <div className="row avatar-sec">
          <div className="col">
            {/* <form> */}
            <input
              type="search"
              placeholder="Search"
              aria-label="Search"
              className="search"
            />
            {/* </form> */}
          </div>
          <div className="col">
            <img src={notify} alt=".." className="vector" />
          </div>
          <div className="col">
            <img src={dark} alt=".." className="vector" />
          </div>
          <div className="col">
            <img src={info} alt=".." className="vector" />
          </div>
          <div className="col">
            <button
              type="button"
              class="btn"
              data-bs-container="body"
              data-bs-toggle="popover"
              data-bs-placement="bottom"
              data-bs-content={
                <button className="btn btn-primary">Logout</button>
              }
            >
              <img src={avatar} alt="avatar" className="vector-avatar" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
