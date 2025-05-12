import HeroCarousel from "../components/carousel/HeroCarousel";
import Features from "../components/Features";
import Products from "../components/products/Products";

const Home = () => {
    return (
        <div>
            <HeroCarousel/>
            <Features/>
            <Products/>
        </div>
    );
};

export default Home;