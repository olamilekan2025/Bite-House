
import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// Layout
import Navbar from "./components/Navigation/navbar";
import Footer from "./components/Footers/footer";

// Pages
import Home from "./Pages/HomePage/home";
import About from "./Pages/AboutPage/about";
import Shop from "./Pages/ShopPage/shop";
import Blog from "./Pages/BlogPage/blog";
import Contact from "./Pages/ContactPage/contact";
import Cart from "./Pages/Page/CartPage/Cart"

// Dropdown Pages
import Chef from "./Pages/Page/ChefPage/chef";
import Faq from "./Pages/Page/FaqPage/faq";
import FoodMenu from "./Pages/Page/FoodMenuPage/foodMenu";
import Reservation from "./Pages/Page/ReservationPage/reservation";
import Services from "./Pages/Page/ServicesPage/services";
import Testimonial from "./Pages/Page/TestimonialPage/testimonial";
import Gallery from "./Pages/Page/GalleryPage/gallery";
import MyAccount from "./Pages/Page/MyAccountPage/myAccount";
import NotFound from "./Pages/Page/NotFoundPage/notFound";

// Utilities
import SplashScreen from "./Utils/SplashScreen";
import Info from "./Utils/InfoPage/infor";
import ServiceHook from "./Utils/ServiceHookPage/ServiceHook";
import PopularFood from "./API/PopularFood/popularFood";
import PopularDishes from "./API/PopularDishes/PopularDishes";
import Register from "./Pages/register";
import ClientReviews from "./Utils/ClientReviewsPage/ClientReviews";
import OurChef from "./Utils/OurChefPage/ourChef"

function AppWrapper() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const shown = sessionStorage.getItem("splashShown");
    if (!shown) {
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("splashShown", "true");
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) return <SplashScreen />;

  return (
    <>
      <Navbar />
      <Routes>
        {/* Main */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart/>} />

        {/* Dropdown Pages */}
        <Route path="/chef" element={<Chef />} />
        <Route path="/foodMenu" element={<FoodMenu />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/myAccount" element={<MyAccount />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/faq" element={<Faq />} />

        {/* Other */}
        <Route path="/info" element={<Info />} />
        <Route path="/serviceHook" element={<ServiceHook />} />
        <Route path="/popularFood" element={<PopularFood />} />
        <Route path="/popularDishes" element={<PopularDishes />} />
        <Route path="/register" element={<Register />} />
        <Route path="/clientReviews" element={<ClientReviews />} />
        <Route path="/ourChef" element={<OurChef />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return <AppWrapper />;
}
