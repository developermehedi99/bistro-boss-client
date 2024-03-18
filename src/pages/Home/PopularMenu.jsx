import { useEffect, useState } from "react";
import ComMenu from "../../components/ComMenu";
import SectionTitle from "../../components/SectionTitle";

const PopularMenu = () => {
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const populerMItem = data.filter((item) => item.category == "popular");
        setMenus(populerMItem);
      });
  }, []);
  return (
    <section>
      <SectionTitle
        subHeading="---Check it out---"
        heading="from our menu"
      ></SectionTitle>
      <div className="md:grid grid-cols-2 gap-10">
        {menus.map((menu) => (
          <ComMenu key={menu._id} menu={menu}></ComMenu>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
