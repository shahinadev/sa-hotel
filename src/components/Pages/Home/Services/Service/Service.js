import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";
const Service = ({ service }) => {
  const { _id, name, price, location, description } = service;
  return (
    <>
      <div class="col">
        <div class="card shadow-sm border-1">
          <img
            src="https://i.ibb.co/NxxTntG/hotel-3.jpg"
            class="card-img-top img-fluid rounded-5"
            alt="..."
          />
          <div class="card-body">
            <h3 class="card-title">{name}</h3>
            <h5 className="card-subtitle">{location}</h5>
            <p class="card-text my-3">{description}</p>
            <span>Starts from</span>
            <h5>
              ${price} / <small>night</small>
            </h5>
            <Link
              to={`/service_details/${_id}`}
              className="btn book-btn d-block"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
