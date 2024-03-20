import { Link } from "react-router-dom";
import ComMenu from "../../components/ComMenu";
import Cover from "../../shares/Cover";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div>
      {title && <Cover title={title} img={img}></Cover>}
      <div className="grid md:grid-cols-2 gap-10">
        {items.map((menu) => (
          <ComMenu key={menu._id} menu={menu}></ComMenu>
        ))}
      </div>
      <Link to="/shop">
        <button className="btn btn-outline mb-10 text-center border-0 border-b-4 mt-3 btn-primary">
          ORDER YOUR FAVOURITE FOOD
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
