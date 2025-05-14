import { useState } from "react";
import ProductList from "./ProductList";
import Pagination from "./Pagination";
import useFetchProducts from "../../hooks/useFetchProducts";
import FilteringSection from "./FilteringSection";
import useFetchCategories from "../../hooks/useFetchCategories";

const ShopPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuary, setSearchQuery] = useState("");
  const { products, isLoading, error, totalPages } = useFetchProducts(
    currentPage,
    priceRange,
    selectedCategory,
    searchQuary
  );
  const categories = useFetchCategories();

  const handlePriceRange = (index, value) => {
    setPriceRange((prev) => {
      const newRange = [...prev];
      newRange[index] = value;
      return newRange;
    });
    setCurrentPage(1);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-700">Shop Our Products</h1>
      <FilteringSection
        priceRange={priceRange}
        handlePriceRange={handlePriceRange}
        categories={categories}
        handleSelectedCategory={setSelectedCategory}
        searchQuary={searchQuary}
        handleSearchQuary={setSearchQuery}
      />
      <ProductList
        products={products}
        isLoading={isLoading}
        error={error}
      />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={setCurrentPage}
      />
    </div>
  );
};

export default ShopPage;
