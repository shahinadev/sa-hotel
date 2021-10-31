import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";
const Service = ({ service }) => {
  const { _id, service_name, price, location, description, service_img } =
    service;
  return (
    <>
      <div className="col">
        <div className="card shadow-sm border-1">
          <img
            src={service_img}
            className="card-img-top img-fluid rounded-5"
            alt="..."
          />
          <div className="card-body">
            <h4 className="card-title fw-500">{service_name}</h4>
            <p className="card-subtitle">
              <i class="fas fa-map-marker-alt"></i>
              {location}
            </p>
            <p className="card-text my-3">{description.slice(0, 50)}</p>
            <span>Starts from</span>
            <h5>
              ${price} / <small>night</small>
            </h5>
            <Link to={`/place-order/${_id}`} className="btn book-btn d-block">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
