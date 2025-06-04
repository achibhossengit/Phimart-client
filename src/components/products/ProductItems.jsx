import { Link } from "react-router";
import product_img from "../../assets/images/default_product.jpg";

const ProductItems = ({ product, categories }) => {
  const getCategoryName = (product) => {
    const category = categories.find(
      (category) => category.id == product.category
    );
    return category ? category.name : "Unknown";
  };

  return (
    <Link
      to={`/shop/${product.id}`}
      className="card bg-white w-96 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out cursor-pointer border-1 border-gray-400"
    >
      <figure className="bg-gray-100">
        <img
          src={
            product.images.length > 0 ? product.images[0].image : product_img
          }
          alt="Product"
          className="h-56 object-cover"
        />
      </figure>
      <div className="p-5">
        <h2 className="text-xl font-bold mb-2 text-gray-800">{product.name}</h2>
        <p className="text-lg font-semibold text-gray-600 mb-1">
          $ {product.price.toFixed(2)}
        </p>
        <p className="text-sm text-gray-500 mb-3">
          Category: {getCategoryName(product)}
        </p>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex justify-center">
          <button className="btn btn-primary bg-pink-500 border-none w-full">Buy Now</button>
        </div>
      </div>
    </Link>
  );
};

export default ProductItems;
