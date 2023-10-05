import React, { Component } from "react";
import image1 from '../vidhema-logo-black.png';
export class Sidebar extends Component {
  render() {
    return (
      <>
        <div className="sidebar">
          <img src={image1} alt="logo" class="logo m-4" />

          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                DASHBOARD
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                PROFILE
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                PROJECT
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                BLOG
              </a>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default Sidebar;
