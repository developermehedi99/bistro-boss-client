import ComMenu from "../../components/ComMenu";
import SectionTitle from "../../components/SectionTitle";
import useMenu from "../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section>
      <SectionTitle
        subHeading="---Check it out---"
        heading="from our menu"
      ></SectionTitle>
      <div className="md:grid grid-cols-2 gap-10">
        {popular.map((menu) => (
          <ComMenu key={menu._id} menu={menu}></ComMenu>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
