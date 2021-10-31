import React, { useEffect, useState } from "react";
import Service from "./Service/Service";
import axios from "axios";
import Loading from "./../../../Shared/Loading/Loading";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    axios
      .get("https://fierce-thicket-55699.herokuapp.com/services")
      .then((result) => {
        setServices(result.data);
      })
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div className="container mb-5">
      <h1 className="my-5 fw-normal">Explore Our Top Hotels / Services</h1>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {!services.length > 0 ? (
          <Loading />
        ) : (
          services.map((service, index) => (
            <Service key={index} service={service} />
          ))
        )}
      </div>
    </div>
  );
};

export default Services;
