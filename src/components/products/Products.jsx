// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Autoplay } from "swiper/modules";
import ProductItems from "./ProductItems";
import useFetchCategories from "../../hooks/useFetchCategories";
import useFetchProducts from "../../hooks/useFetchProducts";
import { useState } from "react";

const Products = () => {
  const { categories } = useFetchCategories();
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const { products, isLoading, error } = useFetchProducts(
    undefined,
    priceRange,
    undefined,
    undefined,
    undefined
  );

  return (
    <section className="my-10">
      {/* Container with improved background and shadow */}
      <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl overflow-hidden border border-gray-100">
        {/* Header Section */}
        <div className="px-8 pt-8 pb-2">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">
                Trending Products
              </h2>
              <p className="text-gray-500 mt-1">
                Discover our most popular items
              </p>
            </div>
            <button className="btn btn-primary bg-pink-500 border-none text-white">
              View All
            </button>
          </div>
        </div>

        {/* Loading Spinner */}
        {isLoading && (
          <div className="text-center py-16">
            <span className="loading loading-spinner loading-lg text-indigo-500"></span>
            <p className="mt-4 text-gray-600">Loading amazing products...</p>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="px-8 py-10 text-center">
            <div className="inline-block p-4 bg-red-50 rounded-lg">
              <p className="font-semibold text-red-600">{error}</p>
            </div>
          </div>
        )}

        {/* No Products Available */}
        {!isLoading && !error && products.length === 0 && (
          <div className="px-8 py-16 text-center">
            <p className="text-gray-500 font-medium">
              No products available right now. Please check back later!
            </p>
          </div>
        )}

        {/* Product Carousel */}
        {!isLoading && !error && products.length > 0 && (
          <div className="px-4 py-6 bg-gradient-to-r from-gray-50 to-gray-100">
            <Swiper
              centeredSlides={true}
              slidesPerView={1}
              spaceBetween={10}
              loop={true}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper pb-10"
            >
              {products.map((product) => (
                <SwiperSlide key={product.id}>
                  <div className="p-4">
                    <ProductItems product={product} categories={categories} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
