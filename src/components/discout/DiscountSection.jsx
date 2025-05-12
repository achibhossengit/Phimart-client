import discountbg from "../../images/banner-image-bg-1.jpg"
import discountImg from "../../images/product-item3.png";
import DiscountTimer from "./DiscountTimer";
const DiscountSection = () => {
  return (
    <div>
      <section
        className="w-full h-[640px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${discountbg})` }}
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* left container */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <img className="w-1/2" src={discountImg} alt="" />
          </div>

          {/* right container */}
          <div className="w-full md:w-1/2 text-center space-y-2 md:space-y-5">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-600">
              30% Discount On All Items. Hurry up!!!
            </h1>
            {/* timer div */}
            <DiscountTimer/>
            <button className="btn btn-secondary rounded-xl">Grap Now</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DiscountSection;
