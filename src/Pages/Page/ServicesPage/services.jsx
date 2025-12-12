import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import ServiceHook from "../../../Utils/ServiceHookPage/ServiceHook";
import "./Services.css";

function Services() {
  useEffect(() => {
    Aos.init({
      offset: 120,
      duration: 700,
      easing: "ease-in-out",
      delay: 100,
      once: true,
    });
  }, []);

  return (
    <>
    <main className="services-landing">
      <div className="services-overlay">
        <div className="services-content">

          {/* TEXT SIDE */}
          <div className="text-block" data-aos="fade-right">
            <span>Our Services</span>
            <h1>Experience Culinary Excellence</h1>
            <p>
              At Bite House, we offer a wide range of services to bring
              authentic flavors to your table. From catering to private chef
              experiences, our team ensures every dish is crafted with passion.
            </p>
            <p>
              Enjoy our home delivery, restaurant reservations, bulk orders,
              and event planning services designed to make your dining experience
              unforgettable.
            </p>
            <button className="services-btn-service">
                <Link to="/">Home</Link> / <Link to="/myAccount">Account</Link>
            </button>
          </div>

          {/* IMAGE SIDE */}
          <div className="image-block" data-aos="fade-left">
            <img
              src="https://res.cloudinary.com/divio4grm/image/upload/v1765378710/istockphoto-1434086811-612x612_mion7h.jpg"
              alt="Our Services"
              />
          </div>

        </div>
      </div>
    </main>
    <ServiceHook/>
              </>
  );
}

export default Services;
