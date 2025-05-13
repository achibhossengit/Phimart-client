import React, { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import ProductList from "./ProductList";
import Pagination from "./Pagination";

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  let [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    apiClient
      .get(`/products/?page=${currentPage}`)
      .then((res) => {
        setProducts(res.data.results);
        setTotalPages(Math.ceil(res.data.count / res.data.results.length));
        console.log(res.data);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [currentPage]);
  return (
    <div>
      <ProductList products={products} isLoading={isLoading} error={error} />
      <Pagination totalPages={totalPages} currentPage={currentPage} handlePageChange={setCurrentPage}/>
    </div>
  );
};

export default ShopPage;
