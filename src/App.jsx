


import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navigation/navbar";
import Footer from "./components/Footers/footer";

// Pages
import Home from "./Pages/HomePage/home";
import About from "./Pages/AboutPage/about";
import Shop from "./Pages/ShopPage/shop";
import Blog from "./Pages/BlogPage/blog";
import Contact from "./Pages/ContactPage/contact";

// Dropdown Pages
import Chef from "./Pages/Page/ChefPage/chef";
import Faq from "./Pages/Page/FaqPage/faq";
import FoodMenu from "./Pages/Page/FoodMenuPage/foodMenu";
import Reservation from "./Pages/Page/ReservationPage/reservation";
import Services from "./Pages/Page/ServicesPage/services";
import Testimonial from "./Pages/Page/TestimonialPage/testimonial";
import Gallery from "./Pages/Page/GalleryPage/gallery";
import MyAccount from "./Pages/Page/MyAccountPage/myAccount";
import NotFound from "./Pages/Page/404Page/404";

// Splash Screen
import SplashScreen from "./Utils/SplashScreen";
import Info from "../src/Utils/InfoPage/infor"

function AppWrapper() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show splash every time route changes
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // splash duration
    return () => clearTimeout(timer);
  }, [location]);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/chef" element={<Chef />} />
        <Route path="/foodMenu" element={<FoodMenu />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/myAccount" element={<MyAccount />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/info" element={<Info />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;

