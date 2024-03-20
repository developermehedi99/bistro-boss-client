import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import imgShop from "../../assets/shop/banner2.jpg";
import useMenu from "../../hooks/useMenu";
import Cover from "../../shares/Cover";
import TabShop from "./TabShop";

const OurShop = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();
  const salad = menu.filter((item) => item.category === "salad");
  const drinks = menu.filter((item) => item.category === "drinks");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Cover img={imgShop} title="our shop"></Cover>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soups</Tab>
          <Tab>Desserts</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
          <TabShop items={salad}></TabShop>
        </TabPanel>
        <TabPanel>
          <TabShop items={pizza}></TabShop>
        </TabPanel>
        <TabPanel>
          <TabShop items={soup}></TabShop>
        </TabPanel>
        <TabPanel>
          <TabShop items={desserts}></TabShop>
        </TabPanel>
        <TabPanel>
          <TabShop items={drinks}></TabShop>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OurShop;
