import React, { useEffect, useState } from "react";
import ProductImageGallary from "../components/productsDetails/ProductImageGallary";
import AddToCartButton from "../components/productsDetails/AddToCartButton";
import { useParams } from "react-router";
import apiClient from "../services/api-client";
import ReviewSection from "../components/reviews/ReviewSection";

const ProductDetails = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await apiClient.get(`/products/${id}/`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center p-8 bg-base-100 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-error mb-4">
            Product Not Found
          </h2>
          <p className="text-gray-600">
            The requested product could not be loaded.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12">
      {/* Main Product Section */}
      <div className="bg-gray-100 rounded-xl shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4 sm:p-6 lg:p-8">
          {/* Product Images */}
          <div className="border border-gray-200 rounded-xl bg-base-100 overflow-hidden">
            <ProductImageGallary images={product.images} />
          </div>

          {/* Product Details */}
          <div className="flex flex-col space-y-6">
            {/* Category and Title */}
            <div>
              <span className="text-sm font-medium text-primary">
                Category: {product.category}
              </span>
              <h1 className="mt-1 text-2xl sm:text-3xl font-bold text-gray-900">
                {product.name}
              </h1>
              <div className="mt-3 flex items-center flex-wrap gap-2">
                <span className="text-xl sm:text-2xl font-bold text-gray-900">
                  ${product.price}
                </span>
                <span className="text-sm text-gray-500">(inc. tax)</span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-500 line-through ml-2">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
            </div>

            {/* Availability */}
            <div className="flex items-center">
              <div
                className={`h-3 w-3 rounded-full mr-2 ${
                  product.stock > 0 ? "bg-green-500" : "bg-red-500"
                }`}
              ></div>
              <span className="text-sm font-medium text-gray-700">
                {product.stock > 0
                  ? `In stock (${product.stock} available)`
                  : "Out of stock"}
              </span>
            </div>

            {/* Description */}
            <div className="prose prose-sm max-w-none text-gray-600">
              <p>{product.description}</p>
              <ul className="mt-4 space-y-1.5">
                {product.features?.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Additional Info */}
            <div className="border-t border-gray-200 pt-4">
              <h3 className="text-sm font-medium text-gray-900">Details</h3>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                {product.details?.map((detail, index) => (
                  <div key={index}>
                    <p className="font-medium text-gray-900">{detail.label}</p>
                    <p className="text-gray-600">{detail.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <div className="border-t border-gray-200 pt-4">
              <AddToCartButton product={product} />
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="border-t border-gray-200 px-4 sm:px-6 lg:px-8 py-8">
          <ReviewSection productId={product.id} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
