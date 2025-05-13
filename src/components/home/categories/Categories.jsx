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
  const [categoires, setCategories] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    setLoading(true);
    apiClient
      .get("/categories")
      .then((res) => setCategories(res.data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="bg-gray-100 rounded-lg shadow-lg my-10 py-5 px-5">
      <div className="flex justify-between mb-5">
        <h1 className="text-3xl font-bold">Explore Categories</h1>
        <button className="bg-pink-500 btn btn-secondary border-none">
          Show All
        </button>
      </div>
      {/* loading spiner */}
      {isLoading && (
        <div className="text-center py-10">
          <span className="loading loading-dots loading-xl text-pink-500"></span>
        </div>
      )}
      {!isLoading && error && (
        <div>
            <p className="text-pink-500 text-center font-semibold">{error}</p>
        </div>
      )}
      {!isLoading && error && categoires.length == 0 && (
        <p className="text-pink-500 text-center font-semibold">No category Available right now!</p>
      )}


      <div className="container mx-auto">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          slidesPerView={1}
          spaceBetween={5} // Adds spacing between slides
          breakpoints={{
            // Adjust slides based on screen width
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {categoires.map((category, index) => (
            <SwiperSlide key={category.id} className="flex justify-center">
              <CategoryItems category={category} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Categories;
