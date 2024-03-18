import React from "react";
import Banner from "./Banner";
import BistoImg from "./BistoImg";
import Featured from "./Featured";
import OnlineCategory from "./OnlineCategory";
import PopularMenu from "./PopularMenu";
import TestMonial from "./TestMonial";

const Home = () => {
  return (
    <div>
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
