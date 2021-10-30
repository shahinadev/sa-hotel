import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.css";
const PageNotFound = () => {
  return (
    <div className="container my-10 text-center">
      <img
        src="https://i.ibb.co/52pbmVG/no-page-found-screen-illustration-1x.png"
        className="img-fluid my-5 rounded-custom"
        alt="404 page not found"
      />
      <h1 className="text-danger">404 Page Not Found!</h1>
      <Link to="/" className="btn back-home-btn w-25 mb-5 mx-auto rounded-top">
        GO Back to Home
      </Link>
    </div>
  );
};

export default PageNotFound;
