import React from 'react';
import image1 from '../components/card1.jpg';
import image2 from '../components/coding2.jpg';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='image'>
    <nav className="navbar navbar-expand-lg bg-color-transparent">
    <div className="container-fluid">
      <a className="navbar-brand logo1 px-5 mx-5" href="#">
       <b>Programming</b> Hero
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <ul class="nav justify-content-end " id="home">
  <li class="nav-item ">
    <a class="nav-link active" href="#">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Pages</a>
  </li>
  <li class="nav-item">
    <a class="nav-link " href="#">Blog</a>
  </li>
  <li class="nav-item">
    <a class="nav-link " href="#">About</a>
  </li>
  
</ul>
    </div>
  </nav>
  <div className="text  mx-5">
    <b>Featured Articles</b>
    <p>Enjoy Personalized,Fun and Interactive Learning Process While<span> Becoming A Programing Hero</span></p>
  </div>

  <div class="container ">
      <div class="row cards">
        <div class="col-3">
          <div class="card">
          <img  className="card-img-top" src={image1} alt="vgjvhbkj" height={700} />
          </div>
        </div>
        <div class="col-3">
          <div class="card">
          <img className="card-img-top" src={image2} alt="Card image cap" />
          </div>
        </div>
        <div class="col-3">
          <div class="card">
          <img className="card-img-top" src="..." alt="Card image cap" />
          </div>
        </div>
        <div class="col-3">
          <div class="card">
          <img className="card-img-top" src="..." alt="Card image cap" />
          </div>
        </div>
      </div>
    </div>
    
</div>
  )
}

export default Navbar;