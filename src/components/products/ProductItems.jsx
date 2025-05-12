import React from "react";
import product_img from "../../images/default_product.jpg"

const ProductItems = ({ product }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm transform hover:scale-105 cursor-pointer">
      <figure className="px-10 pt-10">
        <img
          src={product.images.length > 0 ? product.images[0].image : product_img}
          alt="Books"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{product.name}</h2>
        <p>{product.description}</p>
        <div className="card-actions">
          <button className="btn btn-secondary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductItems;
