import React from "react";
import { Link } from "react-router-dom";
import Service from "./Service/Service";

const Services = () => {
  /* 
https://i.ibb.co/NxxTntG/hotel-3.jpg
https://i.ibb.co/Zx1YMNd/hotel-4.jpg
https://i.ibb.co/Zx1YMNd/hotel-4.jpg
https://i.ibb.co/SBKRkc6/hotel-6.jpg
https://i.ibb.co/BLXzngW/hotel-7.jpg
https://i.ibb.co/YBn6003/hotel-8.jpg
https://i.ibb.co/FVc5W9Q/hotel-9.jpg
https://i.ibb.co/sbzBr6M/hotel.jpg
https://i.ibb.co/VJZPh3G/hotel-1.jpg
https://i.ibb.co/whsK9yb/hotel-2.jpg */
  return (
    <div className="container mb-5">
      <h1 className="my-5 fw-normal">Explore Our Top Hotels / Services</h1>
      <div class="row row-cols-1 row-cols-md-4 g-4">
        {[...Array(11).keys()].map((service, index) => (
          <Service
            key={index}
            service={{
              name: "Shahin Alam",
              price: 500,
              location: "Naogaon",
              description: "Not At all",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
