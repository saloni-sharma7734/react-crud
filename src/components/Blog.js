import React from "react";
import Sidebar from "./Sidebar";
import image1 from "../pexels-shvets-production-6975558.jpg";
export default function Blog() {
  return (
    <>
      <Sidebar />
      <div className="container blog">
        <div className="blog-sec">
          <div className="blog-head-sec">
            <div className="row blog-row1">
              <div className="col">
                <p className="blog-head">Blogs</p>
              </div>
              <div className="col text-end">
                <button className="btn-primary btn">Insert Blog</button>
              </div>
            </div>
          </div>
          <div className="blog-body container">
            <div className="blog-body-head">
              <p className="bl-bd-head">All Blogs</p>
            </div>
            <div className="blog-body-sec">
              <div className="row">
                <hr />
              </div>
              <div className="row">
                <div className="col-1">
                  <p className="blog-text">S.no</p>
                </div>
                <div className="col-2">
                  <p className="blog-text">Image</p>
                </div>
                <div className="col">
                  <p className="blog-text">Title</p>
                </div>
                <div className="col-6">
                  <p className="blog-text">Description</p>
                </div>
              </div>
              <div className="row">
                <hr />
              </div>
            </div>
            <div className="blog-body-sec">
              {/* <hr /> */}
              <div className="row">
                <div className="col-1">
                  <p className="blog-text">1</p>
                </div>
                <div className="col-2">
                  <img src={image1} alt=".." />
                </div>
                <div className="col">
                  <p className="blog-text">Title</p>
                </div>
                <div className="col-6">
                  <p className="blog-text">Description</p>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
