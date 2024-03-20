import React from "react";

const ShopCard = ({ items }) => {
  const { name, image, recipe, price } = items;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
