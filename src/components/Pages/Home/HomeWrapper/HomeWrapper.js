import React from "react";
import OurAchievement from "../OurAchievement/OurAchievement";
import Reviews from "../Reviews/Reviews";
import Services from "../Services/Services";
import Banner from "./../Banner/Banner";

const HomeWrapper = () => {
  return (
    <>
      <Banner />
      <Services />
      <OurAchievement />
      <Reviews />
    </>
  );
};

export default HomeWrapper;
