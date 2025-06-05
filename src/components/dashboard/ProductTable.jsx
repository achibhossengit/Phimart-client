import React, { useEffect, useState } from "react";
import apiClient from "../../services/api-client";

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize] = useState(10);

  const fetchProducts = async (page = 1) => {
    setLoading(true);
    try {
      const res = await apiClient.get(`/products/?page=${page}`);
      setProducts(res.data.results);
      setTotalPages(Math.ceil(res.data.count / pageSize));
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="m-5">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse shadow-md rounded-lg overflow-hidden">
          {/* Table Headers */}
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-3 text-left font-semibold">Product ID</th>
              <th className="p-3 text-left font-semibold">Image</th>
              <th className="p-3 text-left font-semibold">Product Name</th>
              <th className="p-3 text-left font-semibold">Unit Price</th>
              <th className="p-3 text-left font-semibold">Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {!loading ? (
              products.length > 0 ? (
                products.map((product) => (
                  <tr
                    key={product.id}
                    className="border-b border-gray-200 bg-white hover:bg-gray-50 transition-colors"
                  >
                    <td className="p-3">{product.id}</td>
                    <td className="p-3">
                      {product.images && (
                        <img
                          src={
                            product.images?.length > 0
                              ? product.images[0].image
                              : null
                          }
                          alt={product.name}
                          className="w-12 h-12 object-cover rounded"
                        />
                      )}
                    </td>
                    <td className="p-3">{product.name}</td>
                    <td className="p-3">${product.price?.toFixed(2)}</td>
                    <td className="p-3 flex gap-2 items-center">
                      <button className="btn btn-primary btn-sm">Edit</button>
                      <button className="btn btn-error btn-sm">Delete</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="p-3 text-center">
                    No products found
                  </td>
                </tr>
              )
            ) : (
              <tr>
                <td colSpan="5" className="p-3 text-center">
                  <span className="loading loading-spinner loading-sm"></span>{" "}
                  Loading Products...
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      {products.length > 0 && (
        <div className="flex justify-center mt-4">
          <div className="join">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="join-item btn btn-sm"
            >
              «
            </button>
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              // Show limited page numbers (max 5)
              let pageNum;
              if (totalPages <= 5) {
                pageNum = i + 1;
              } else if (currentPage <= 3) {
                pageNum = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + i;
              } else {
                pageNum = currentPage - 2 + i;
              }

              return (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`join-item btn btn-sm ${
                    currentPage === pageNum ? "btn-active" : ""
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="join-item btn btn-sm"
            >
              »
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductTable;
