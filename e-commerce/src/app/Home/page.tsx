import Header from "../sharedcomponents/header";
import Hero from "./Components/HeroSection";
import FlashSales from "./Components/FlashSales";
import SellingProducts from "./Components/Selling _products";
import Categories from "./Components/Categories";
import Products from "./Components/Products";
import NewArrivals from "./Components/NewArrival";
import Footer from "../sharedcomponents/footer";



function HomePage() {
  return (
    <div className="">
    <Header/>
    <Hero/>
    <FlashSales/>
     <Categories/>
    <SellingProducts/>
    <Products/>
    <NewArrivals/>
    <Footer/> 
    </div>
  );
}

export default HomePage;