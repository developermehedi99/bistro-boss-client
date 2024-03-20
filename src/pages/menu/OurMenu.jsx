import React from "react";
import { Helmet } from "react-helmet-async";
import imgMenu from "../../assets/menu/banner3.jpg";
import imgdes from "../../assets/menu/dessert-bg.jpeg";
import imgpizza from "../../assets/menu/pizza-bg.jpg";
import imgsalad from "../../assets/menu/salad-bg.jpg";
import imgsoup from "../../assets/menu/soup-bg.jpg";
import SectionTitle from "../../components/SectionTitle";
import useMenu from "../../hooks/useMenu";
import Cover from "../../shares/Cover";
import MenuCategory from "./MenuCategory";

const OurMenu = () => {
  const [menu] = useMenu();
  const salad = menu.filter((item) => item.category === "salad");
  const drinks = menu.filter((item) => item.category === "drinks");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro | our menu</title>
      </Helmet>
      <Cover img={imgMenu} title="Our menu"></Cover>
      <SectionTitle
        subHeading="---Don't miss---"
        heading="TODAY'S OFFER"
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      <MenuCategory
        title={"desserts"}
        img={imgdes}
        items={desserts}
      ></MenuCategory>
      <MenuCategory items={pizza} title={"pizza"} img={imgpizza}></MenuCategory>
      <MenuCategory items={salad} title={"salad"} img={imgsalad}></MenuCategory>
      <MenuCategory items={soup} title={"soup"} img={imgsoup}></MenuCategory>
    </div>
  );
};

export default OurMenu;
