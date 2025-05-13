import { useState } from "react";
import ProductList from "./ProductList";
import Pagination from "./Pagination";
import useFetchProducts from "../../hooks/useFetchProducts";

const ShopPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const {products, isLoading, error, totalPages} = useFetchProducts(currentPage)

  return (
    <div>
      <ProductList products={products} isLoading={isLoading} error={error} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={setCurrentPage}
      />
    </div>
  );
};

export default ShopPage;
