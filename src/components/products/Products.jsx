// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";
import ProductItems from "./ProductItems";
import useFetchCategories from "../../hooks/useFetchCategories";
import useFetchProducts from "../../hooks/useFetchProducts";
import { useState } from "react";

const Products = () => {
  const categories = useFetchCategories();
  const [priceRange2, setPriceRange2] = useState([0, 1000]);
  const { products, isLoading, error, totalPages } = useFetchProducts(
    undefined,
    priceRange2, // to fix looping issues
    undefined,
    undefined,
    undefined
  );
  return (
    <section className="my-10 bg-gray-100 rounded-lg shadow-lg p-5">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-3xl font-bold text-gray-800">Trending Products</h2>
        <button className="btn btn-primary bg-pink-500 hover:bg-pink-600 border-none">
          View All
        </button>
      </div>

      {/* Loading Spinner */}
      {isLoading && (
        <div className="text-center py-10">
          <span className="loading loading-dots loading-xl text-pink-500"></span>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <p className="text-center font-semibold text-pink-500 py-10">{error}</p>
      )}

      {/* No Products Available */}
      {!isLoading && !error && products.length === 0 && (
        <p className="text-center font-semibold text-gray-500 py-10">
          No products available right now!
        </p>
      )}

      {/* Product Carousel */}
      <div className=" container mx-auto justify-items-center">
        {!isLoading && !error && products.length > 0 && (
          <Swiper
            centeredSlides={true}
            slidesPerView={1}
            spaceBetween={5}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductItems product={product} categories={categories} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};
export default Products;
