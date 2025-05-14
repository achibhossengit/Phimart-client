import useFetchCategories from "../../hooks/useFetchCategories";
import ProductItems from "../products/ProductItems";

const ProductList = ({ products, isLoading, error }) => {
  const categories = useFetchCategories()
  const classes =
    "text-pink-500 text-center h-screen flex justify-center items-center";
  if (isLoading) {
    return (
      <div className={classes}>
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }
  if (!isLoading && error) {
    return (
      <div className={classes}>
        <p>{error}</p>
      </div>
    );
  }
  if (!isLoading && !error && products.length == 0) {
    return (
      <div className={classes}>
        <p>No products available right now!</p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
      {products.map((product) => (
        <ProductItems key={product.id} product={product} categories={categories}/>
      ))}
    </div>
  );
};

export default ProductList;
