import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import BistoImg from "./BistoImg";
import Featured from "./Featured";
import OnlineCategory from "./OnlineCategory";
import PopularMenu from "./PopularMenu";
import TestMonial from "./TestMonial";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <OnlineCategory></OnlineCategory>
      <BistoImg></BistoImg>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
      <TestMonial></TestMonial>
    </div>
  );
};

export default Home;
