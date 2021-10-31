import React from "react";

const OurAchievement = () => {
  return (
    <div className="container my-5">
      <h2 className="fw-normal my-5">Our Achievement</h2>
      <h4 className="fw-normal m-0" style={{ textAlign: "center" }}>
        Winning Multiple World Hotel Agency Awards
      </h4>
      <div className="row my-5 mx-auto justify-content-center align-items-center">
        <div className="col-md-4 mx-auto">
          <img
            className="img-fluid d-block mx-auto rounded-5 mb-lg-0 mb-5"
            src="https://i.ibb.co/ChJtF5c/images.png"
            alt="Awards"
          />
        </div>
        <div className="col-md-4 mx-auto">
          <img
            className="img-fluid d-block mx-auto rounded-5 w-75"
            src="https://i.ibb.co/7bcd8fB/2016-Winner-Logo-Black-01.png"
            alt="Awards"
          />
        </div>
      </div>
    </div>
  );
};

export default OurAchievement;
