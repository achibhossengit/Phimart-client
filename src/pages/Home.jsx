import HeroCarousel from "../components/carousel/HeroCarousel";
import DiscountSection from "../components/discout/DiscountSection";
import Features from "../components/Features";
import Products from "../components/products/Products";

const Home = () => {
    return (
        <div>
            <HeroCarousel/>
            <Features/>
            <Products/>
            <DiscountSection/>
        </div>
    );
};

export default Home;