const ComMenu = ({ menu }) => {
  const { name, image, recipe, price } = menu;
  return (
    <div className="flex gap-7">
      <img
        style={{ borderRadius: "0px 200px 200px 200px" }}
        className="w-[110px] "
        src={image}
        alt=""
      />
      <div>
        <h2>{name}------</h2>
        <p>{recipe}</p>
      </div>
      <h1>{price}</h1>
    </div>
  );
};

export default ComMenu;
