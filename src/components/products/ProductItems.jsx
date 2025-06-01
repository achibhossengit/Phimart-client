import { Link } from "react-router";
import product_img from "../../assets/images/default_product.jpg";

const ProductItems = ({ product, categories }) => {
  const getCategoryName = (product) => {
    const category = categories.find(
      (category) => category.id == product.category
    );
    return category.name;
  };
  return (
    <Link
      to={`/shop/${product.id}`}
      className="card bg-base-100 w-96 shadow-sm transform hover:scale-105 cursor-pointer"
    >
      <figure className="px-10 pt-10">
        <img
          src={
            product.images.length > 0 ? product.images[0].image : product_img
          }
          alt="Books"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{product.name}</h2>
        <p className="font-semibold">$ {product.price}</p>
        <p className="font-semibold">
          Category: {getCategoryName(product)}
        </p>
        <p>{product.description}</p>
        <div className="card-actions">
          <button className="btn btn-secondary">Buy Now</button>
        </div>
      </div>
    </Link>
  );
};

export default ProductItems;
