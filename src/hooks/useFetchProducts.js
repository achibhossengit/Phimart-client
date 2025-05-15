import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const useFetchProducts = (currentPage=1, priceRange=[0,1000], selectedCategory="", searchQuary="", sortPrice="") => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchProducts = async() => {
      setLoading(true);
      const url = `/products/?category_id=${selectedCategory}&price__gt=${priceRange[0]}&price__lt=${priceRange[1]}&page=${currentPage}&search=${searchQuary}&ordering=${sortPrice}`
      try {
        const response = await apiClient.get(url);
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
  }, [currentPage, selectedCategory, searchQuary, sortPrice]);
  return { products, isLoading, error, totalPages, sortPrice };
};

export default useFetchProducts;
