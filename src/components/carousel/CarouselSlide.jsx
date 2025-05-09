import bannerbg from "../../images/banner-image-bg.jpg"
const CarouselSlide = ({title, subtitle, img}) => {
  return (
    <div>
      <section className="w-full h-[640px] bg-cover bg-center flex items-center justify-center" style={{backgroundImage: `url(${bannerbg})`}}>
        <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto justify-between px-0 md:px-10">
          {/* left container */}
          <div className="w-full md:w-1/2 text-center space-y-2 md:space-y-5">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-600">{title}</h1>
            <p className="text-gray-500">{subtitle}</p>
            <button className="btn btn-secondary rounded-xl">Shop Now</button>
          </div>

          {/* right container */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img className="w-4/5" src={img} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarouselSlide;
