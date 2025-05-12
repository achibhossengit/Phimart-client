// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import ProductItems from "./ProductItems";
import apiClient from "../../services/api-client";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    setLoading(true);
    apiClient
      .get("/products")
      .then((res) => {setProducts(res.data.results)})
      .catch((err) => {setError(err.message)})
      .finally(() => setLoading(false))
  }, []);

  return (
    <section className="my-10">
      <div className="flex justify-between items-center px-5">
        <h2 className="text-3xl font-bold">Trending Products</h2>
        <button className="btn btn-secondary">View All</button>
      </div>
      <div>
        {/* spining */}
        {isLoading && (
          <div className="text-center py-10">
            <span className="loading loading-dots loading-xl text-pink-500"></span>
          </div>
        )}
        {/* handle error */}
        {error && (
          <p className="text-center font-semibold text-pink-500 py-10">
            {error}
          </p>
        )}

        {!isLoading && !error && products.length == 0 && (
          <p className="text-center font-semibold text-pink-500 py-10">
            No product available right now!
          </p>
        )}

        {/* product carousel slider */}
        {!isLoading && !error && products.length > 0 && (
          <Swiper
            centeredSlides={true}
            slidesPerView={1}
            // loop={true}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 10 },
              1024: { slidesPerView: 3, spaceBetween: 10 },
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductItems product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};
export default Products;
