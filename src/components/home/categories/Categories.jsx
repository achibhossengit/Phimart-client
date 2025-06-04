// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import CategoryItems from "./CategoryItems";
import { useEffect, useState } from "react";
import apiClient from "../../../services/api-client";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    apiClient
      .get("/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="my-10">
      {/* Container with improved styling */}
      <div className="bg-gradient-to-b from-white to-gray-50 rounded-xl shadow-lg overflow-hidden border border-gray-200">
        {/* Header Section */}
        <div className="px-8 pt-8 pb-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                Explore Categories
              </h1>
              <p className="text-gray-500 mt-1">
                Browse our diverse collections
              </p>
            </div>
            <button className="btn bg-gradient-to-r from-pink-400 to-pink-600 hover:from-indigo-600 hover:to-purple-700 text-white border-none px-6 py-3 rounded-lg shadow hover:shadow-md transition-all duration-300">
              View All Categories
            </button>
          </div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-16">
            <span className="loading loading-spinner loading-lg text-indigo-500"></span>
            <p className="mt-4 text-gray-600">
              Discovering amazing categories...
            </p>
          </div>
        )}

        {/* Error State */}
        {!isLoading && error && (
          <div className="px-8 py-10 text-center">
            <div className="inline-block p-4 bg-red-50 rounded-lg border border-red-100">
              <p className="font-medium text-red-600">{error}</p>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!isLoading && !error && categories.length === 0 && (
          <div className="px-8 py-16 text-center">
            <p className="text-gray-500 font-medium">
              No categories available at the moment. Check back soon!
            </p>
          </div>
        )}

        {/* Categories Carousel */}
        {!isLoading && !error && categories.length > 0 && (
          <div className="px-4 py-6 bg-gray-50">
            <Swiper
              centeredSlides={true}
              pagination={{
                dynamicBullets: true,
                clickable: true,
              }}
              slidesPerView={1}
              spaceBetween={20}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
                1280: { slidesPerView: 5 },
              }}
              modules={[Pagination]}
              className="mySwiper pb-12 px-2"
            >
              {categories.map((category) => (
                <SwiperSlide key={category.id}>
                  <div className="px-2 py-4 h-full">
                    <CategoryItems category={category} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}

        {/* Decorative footer */}
        <div className="h-2 bg-gradient-to-r from-pink-600 to-pink-50"></div>
      </div>
    </section>
  );
};

export default Categories;
