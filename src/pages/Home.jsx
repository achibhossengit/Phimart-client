import HeroCarousel from "../components/home/carousel/HeroCarousel";
import Categories from "../components/home/categories/Categories";
import DiscountSection from "../components/home/discout/DiscountSection";
import Features from "../components/home/Features";
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