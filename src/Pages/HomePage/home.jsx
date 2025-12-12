import "./Home.css";
import { useEffect } from "react";
import PopularFood from "../../API/PopularFood/popularFood";
import PopularDishes from "../../API/PopularDishes/PopularDishes";
import Aos from "aos";
import 'aos/dist/aos.css';

function Home() {
     useEffect(() => {
            Aos.init({
                offset: 120,
                duration: 700,
                easing: 'ease-in-out',
                delay: 100,
                once: true,
            });
        }, []);
  return (
    <>
    <main className="home">
      <div className="hero-area">
        <div className="hero-wrapper" data-aos="fade-right">
          <div className="hero-left" >
            <a className="tagline">Hot for every Sunday</a>
            <br />
            <span className="hero-title">Enjoy our <a>delicius</a> food</span>

            <p className="hero-text">
              Dive into a world of bold flavors, secret spices, and perfectly
              fried golden chicken. Made fresh. Served hot.
            </p>

            <div className="hero-review">
              ⭐⭐⭐⭐⭐
              <span>Rated #1 Street Chicken</span>
            </div>

            <button className="btn-order">Order Now</button>
          </div>

          <div className="hero-right" data-aos="fade-left">
            <img
              src="https://res.cloudinary.com/divio4grm/image/upload/v1765277257/hero-four_img1_uxd5c4.png"
              alt="Bite House Chicken"
              />
          </div>
        </div>
      </div>
    </main>
    <PopularFood/>
    <PopularDishes/>
              </>
  );
}

export default Home;
