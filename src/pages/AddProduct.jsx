import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import apiClient from "../services/api-client";
import authApiClient from "../services/auth-api-client";
import { useNavigate } from "react-router";

const AddProduct = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [productId, setProductId] = useState(null);
  const [previewImages, setPreviewImages] = useState([]);
  const [images, setImages] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await apiClient.get("/categories/");
        setCategories(response.data);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, [categories]);

  const onSubmit = async (data) => {
    try {
      const response = await authApiClient.post("/products/", data);
      if (response) {
        setProductId(response.data.id);
        alert("Product added successfully!");
        reset();
      }
    } catch (error) {
      console.error("Failed to post product:", error);
    }
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
    setPreviewImages(files.map((file) => URL.createObjectURL(file)));
  };

  const handleImageUpload = async () => {
    if (!images.length) return alert("Please upload images first!");
    setIsLoading(true)
    try {
      for (const image of images) {
        const formData = new FormData();
        formData.append("image", image);
        const res = await authApiClient.post(
          `/products/${productId}/images/`,
          formData
        );
        if (res.status === 201){
          setIsLoading(false)
          setProductId(null)
          alert('Images uploaded!')
        }
      }
    } catch (error) {
      console.log(error);
    }finally{
      setIsLoading(false)
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      {!productId ? (
        <div>
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            Add New Product
          </h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Product Name *
              </label>
              <input
                {...register("name", {
                  required: "Product name is required",
                  minLength: {
                    value: 3,
                    message: "Product name must be at least 3 characters",
                  },
                })}
                type="text"
                placeholder="Enter product name"
                className={`w-full px-3 py-2 border rounded-md ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                {...register("description", {
                  required:"Description is required!",
                  maxLength: {
                    value: 500,
                    message: "Description cannot exceed 500 characters",
                  },
                })}
                placeholder="Enter product description"
                rows={3}
                className={`w-full px-3 py-2 border rounded-md ${
                  errors.description ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.description && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.description.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price *
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                  $
                </span>
                <input
                  {...register("price", {
                    required: "Price is required",
                    min: {
                      value: 0.01,
                      message: "Price must be greater than 0",
                    },
                    valueAsNumber: true,
                  })}
                  type="number"
                  step="0.01"
                  placeholder="0.00"
                  className={`w-full pl-8 pr-3 py-2 border rounded-md ${
                    errors.price ? "border-red-500" : "border-gray-300"
                  }`}
                />
              </div>
              {errors.price && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.price.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Stock Quantity *
              </label>
              <input
                {...register("stock", {
                  required: "Stock quantity is required",
                  min: {
                    value: 0,
                    message: "Stock cannot be negative",
                  },
                  valueAsNumber: true,
                })}
                type="number"
                placeholder="Enter quantity"
                className={`w-full px-3 py-2 border rounded-md ${
                  errors.stock ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.stock && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.stock.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category *
              </label>
              {isLoading ? (
                <p>Loading categories...</p>
              ) : (
                <select
                  {...register("category", {
                    required: "Please select a category",
                  })}
                  className={`w-full px-3 py-2 border rounded-md ${
                    errors.category ? "border-red-500" : "border-gray-300"
                  }`}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.product_count} products)
                    </option>
                  ))}
                </select>
              )}
              {errors.category && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.category.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-2 px-4 rounded-md text-white font-medium hover:cursor-pointer ${
                isSubmitting ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {isSubmitting ? "Adding Product..." : "Add Product"}
            </button>
          </form>
        </div>
      ) : (
        <div className="space-y-3">
          <h3>
            Upload Product Images <span>(*Multiple allowed)</span>
          </h3>
          <div>
            <input
              onChange={handleImageChange}
              type="file"
              multiple
              accept="image/*"
              className="file-input focus:outline-none w-full"
            />
          </div>
          <div className="flex gap-2">
            {previewImages.length > 0 &&
              previewImages.map((url, index) => (
                <img key={index} src={url} className="w-16 h-16 rounded-md" />
              ))}
          </div>
          <button
            onClick={handleImageUpload}
            disabled={isLoading}
            className={`btn btn-primary w-full`}
          >
            {isLoading ? 'Uploading' : 'Upload images'}
          </button>
        </div>
      )}
    </div>
  );
};

export default AddProduct;
