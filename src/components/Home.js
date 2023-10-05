import React from 'react'
import image1 from "../components/card1.jpg";
import './Navbar.css';

import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <div class="container ">
        <div class="row">
          <div class="col-lg col-sm-12 col-md-6 mt-5 mb-5">
            <div class="card">
              <img className="card-img-top" src={image1} alt="vgjvhbkj" md-3 />
            </div>
          </div>
          <div class="col-lg col-sm-12 col-md-6 mt-5 mb-5">
            <div class="card">
              <img className="card-img-top" src={image1} alt="Card image cap" />
            </div>
          </div>
          <div class="col-lg col-sm-12 col-md-6 mt-5 mb-5">
            <div class="card">
              <img className="card-img-top" src={image1} alt="Card image cap" />
            </div>
          </div>
          <div class="col-lg col-sm-12 col-md-6 mt-5 mb-5">
            <div class="card">
              <img className="card-img-top" src={image1} alt="Card image cap" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="..." alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="..." alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only"></span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only"></span>
  </a>
</div>
    </>
  )
}

export default Home
