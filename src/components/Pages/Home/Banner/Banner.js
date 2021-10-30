import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";
const Banner = () => {
  return (
    <header className="banner d-grid">
      <div className="container position-absolute text-center  text-light">
        <h1>SA Hotel Booking Ltd</h1>
        <h4>Book your Favorite Hotel or Resort</h4>
        <Link to="#services" className="btn banner-btn w-25 mx-auto my-5">
          Book Now
        </Link>
      </div>
    </header>
  );
};

export default Banner;
