import React from "react";

const OurAchievement = () => {
  // https://i.ibb.co/ChJtF5c/images.png
  // https://i.ibb.co/7bcd8fB/2016-Winner-Logo-Black-01.png
  return (
    <div className="container my-5">
      <h2 classNam="fw-normal my-5">Our Achievement</h2>
      <h4 classNam="fw-normal m-0" style={{ textAlign: "center" }}>
        Winning Multiple World Hotel Agency Awards
      </h4>
      <div className="row my-3 mx-auto justify-content-center align-items-center">
        <div className="col-md-4 my-5">
          <img
            className="img-fluid rounded-5 "
            src="https://i.ibb.co/ChJtF5c/images.png"
            alt="Awards"
          />
        </div>
        <div className="col-md-4">
          <img
            className="img-fluid rounded-5 w-75"
            src="https://i.ibb.co/7bcd8fB/2016-Winner-Logo-Black-01.png"
            alt="Awards"
          />
        </div>
      </div>
    </div>
  );
};

export default OurAchievement;
