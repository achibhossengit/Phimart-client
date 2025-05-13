import React, { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import ProductList from "./ProductList";

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    setLoading(true);
    apiClient
      .get("/products")
      .then((res) => setProducts(res.data.results))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);
  return (
    <div>
      <ProductList products={products} isLoading={isLoading} error={error}/>
    </div>
  );
};

export default ShopPage;
