import bannerbg from "../../images/banner-image-bg.jpg"
const CarouselSlide = ({title, subtitle, img}) => {
  return (
    <div>
      <section className="w-full h-[640px] bg-cover bg-center flex justify-center" style={{backgroundImage: `url(${bannerbg})`}}>
        <div className="flex items-center  max-w-6xl justify-between px-10">
          {/* left container */}
          <div className="w-1/2">
            <h1 className="text-6xl font-bold text-gray-600">{title}</h1>
            <p className="text-gray-500">{subtitle}</p>
            <button className="btn btn-secondary rounded-xl">Shop Now</button>
          </div>

          {/* right container */}
          <div className="w-1/2 flex justify-end">
            <img src={img} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarouselSlide;
