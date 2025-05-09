// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import CarouselSlide from './CarouselSlide';

// images
import slide1 from "../../images/banner-image1.png"
import slide2 from "../../images/banner-image2.png"
import slide3 from "../../images/banner-image3.png"

const HeroCarousel = () => {
    const sildes = [
        {title: "The Fine Book Collections", subtitle:"Discount available. Crack it Now!", img: slide1},
        {title: "The Fine Book Collections", subtitle:"Discount available. Crack it Now!", img: slide2},
        {title: "The Fine Book Collections", subtitle:"Discount available. Crack it Now!", img: slide3},
    ];

  return (
    <>
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {sildes.map((slide, index)=> (
            <SwiperSlide key={index}>
                <CarouselSlide title={slide.title} subtitle={slide.subtitle} img={slide.img}/>
                </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default HeroCarousel;