import HeroCarousel from "../components/carousel/HeroCarousel";
import Categories from "../components/categories/Categories";
import DiscountSection from "../components/discout/DiscountSection";
import Features from "../components/Features";
import Products from "../components/products/Products";

const Home = () => {
    return (
        <div>
            <HeroCarousel/>
            <Features/>
            <DiscountSection/>
            <Products/>
            <Categories/>
        </div>
    );
};

export default Home;