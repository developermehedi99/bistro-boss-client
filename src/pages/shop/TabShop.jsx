import ShopCard from "./ShopCard";

const TabShop = ({ items }) => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {items.map((item) => (
        <ShopCard key={item._id} items={item}></ShopCard>
      ))}
    </div>
  );
};

export default TabShop;
