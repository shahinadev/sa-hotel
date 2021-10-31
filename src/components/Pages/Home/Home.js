import React, { useEffect, useState } from "react";
import HomeWrapper from "./HomeWrapper/HomeWrapper";
import Loading from "../../Shared/Loading/Loading";
import axios from "axios";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    axios
      .get("https://fierce-thicket-55699.herokuapp.com/services")
      .then((res) => setServices(res.data))
      .catch((err) => console.log(err));
  });
  return <>{!services.length > 0 ? <Loading /> : <HomeWrapper />}</>;
};

export default Home;
