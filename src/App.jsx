import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Layout
import Navbar from "./components/Navigation/navbar";
import Footer from "./components/Footers/footer";

// Pages
import Home from "./Pages/HomePage/home";
import About from "./Pages/AboutPage/about";
import Shop from "./Pages/ShopPage/shop";
import Blog from "./Pages/BlogPage/blog";
import Contact from "./Pages/ContactPage/contact";
import Cart from "./Pages/Page/CartPage/Cart";
import MealDetails from "./Utils/MealDetails/MealDetails";
import BlogDetails from "./Utils/BlogDetailsPage/BlogDetails";

// Dropdown Pages
import Faq from "./Pages/Page/FaqPage/faq";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import NotFound from "./Pages/Page/NotFoundPage/notFound";

// Utilities
import SplashScreen from "./Utils/SplashScreen";
import CheckoutForm from "./Utils/CheckoutFormPage/CheckoutForm";
import Payment from "./Utils/PaymentPage/Payment";
import ScrollToTop from "./Utils/ScrollToTop/ScrollToTop";
import AllMeals from "./Pages/AllMealsPage/AllMeals";
import AllDishes from "./Pages/AllDishesPage/AllDishes";

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
      {/* GLOBAL TOAST */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
      />

      <Navbar />
      <ScrollToTop />

      <Routes>
        {/* MAIN */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />

        {/* CART */}
        <Route path="/cart" element={<Cart />} />

        {/* MEALS */}
        <Route path="/meal/:id" element={<MealDetails />} />
        <Route path="/dish/:id" element={<MealDetails />} />
        <Route path="/all-meals" element={<AllMeals />} />
        <Route path="/all-dishes" element={<AllDishes />} />

        {/* BLOG */}
        <Route path="/blog/:id" element={<BlogDetails />} />

        {/* CHECKOUT & PAYMENT (GUEST ALLOWED ✅) */}
        <Route path="/checkout" element={<CheckoutForm />} />
        <Route path="/payment" element={<Payment />} />

        {/* AUTH */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* DROPDOWN */}
        <Route path="/faq" element={<Faq />} />

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
