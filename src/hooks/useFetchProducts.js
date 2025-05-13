import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const useFetchProducts = (currentPage) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchProducts = async() => {
      setLoading(true);
      try {
        const response = await apiClient.get(`/products/?page=${currentPage}`);
        const data = await response.data;
        setProducts(data.results);
        setTotalPages(Math.ceil(data.count / data.results.length));
      } catch(err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [currentPage]);

  return { products, isLoading, error, totalPages };
};

export default useFetchProducts;
