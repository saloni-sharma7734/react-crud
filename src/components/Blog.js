import React from "react";
import Sidebar from "./Sidebar";
import image1 from "../pexels-shvets-production-6975558.jpg";
import myimage1 from "../components/pages/img1.png";
export default function Blog() {
  const fstyle = {
    borderRadius: "30px",
  };
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
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                  Insert Blog
                </button>
              </div>
            </div>
          </div>
          <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="staticBackdropLabel">Blog insertion </h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  {/* <div className="container my-lg-5"> */}
                    <form>
                      <div className="form-group">
                        <img src={myimage1} alt=".." />
                        <label for="image">
                          &nbsp;<b>Image</b>
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
                        <label for="title" className="headings">
                          <b>Title</b>
                        </label>
                        <br />
                        <input
                          type="text"
                          className="form-control my-2"
                          id="title"
                          style={fstyle}
                          placeholder="Enter your title"
                        />
                      </div>
                      <div className="form-group my-2">
                        <label for="descp" className="headings">
                          <b>Description</b>
                        </label>
                        <br />
                        <input
                          type="textarea"
                          className="form-control my-2"
                          id="descp"
                          style={fstyle}
                          placeholder="Enter your description"
                        />
                      </div>
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Discard</button>
                    <button type="button" class="btn btn-primary">Create Blog</button>
                  </div>
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
