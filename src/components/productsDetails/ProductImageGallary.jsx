import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import { useState } from "react";
import defaultImage from "../../assets/images/default_product.jpg"

const ProductImageGallary = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const displayImages = images?.length > 0 ? images : [{image: defaultImage}]

  console.log(images);
  return (
    <div className="overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Thumbs]}
        thumbs={{ swiper: thumbsSwiper }}
        navigation
        pagination={{ clickable: true }}
      >
        {displayImages.map((imageObj, index) => (
          <SwiperSlide>
            <div className="aspect-square bg-base-200">
              <img
                className="w-full h-full"
                src={imageObj.image}
                alt="product name"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductImageGallary;
