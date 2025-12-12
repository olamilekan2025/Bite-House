import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

// ICONS
import { GiChefToque, GiMeal } from "react-icons/gi";
import { MdDeliveryDining } from "react-icons/md";
import { FaUtensils, FaTruckFast, FaPeopleGroup } from "react-icons/fa6";

import "./ServiceHook.css";

function ServiceHook() {
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
    <main className="service">
      

      <div className="service-grid">

        {/* CARD 1 */}
        <div className="service-card" data-aos="fade-up">
          <div className="service-icon">
            <GiChefToque />
          </div>
          <h2>Professional Catering</h2>
          <p>
            Let us serve your events with a full catering experience designed to
            impress your guests with premium flavors.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="service-card" data-aos="fade-up" data-aos-delay="100">
          <div className="service-icon">
            <MdDeliveryDining />
          </div>
          <h2>Home Delivery</h2>
          <p>
            Enjoy Bite House meals delivered hot and fresh to your door with our
            fast and reliable delivery services.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="service-card" data-aos="fade-up" data-aos-delay="200">
          <div className="service-icon">
            <GiMeal />
          </div>
          <h2>Private Chef</h2>
          <p>
            Hire our professional chefs for private dinners and exclusive culinary
            experiences for you and your guests.
          </p>
        </div>

        {/* CARD 4 */}
        <div className="service-card" data-aos="fade-up" data-aos-delay="300">
          <div className="service-icon">
            <FaUtensils />
          </div>
          <h2>Restaurant Booking</h2>
          <p>
            Reserve your table and enjoy a premium dining experience with a touch
            of style and comfort at Bite House.
          </p>
        </div>

        {/* CARD 5 */}
        <div className="service-card" data-aos="fade-up" data-aos-delay="400">
          <div className="service-icon">
            <FaTruckFast />
          </div>
          <h2>Bulk Orders</h2>
          <p>
            Order in bulk for offices, events, and wholesale needs with fast preparation and delivery.
          </p>
        </div>

        {/* CARD 6 */}
        <div className="service-card" data-aos="fade-up" data-aos-delay="500">
          <div className="service-icon">
            <FaPeopleGroup />
          </div>
          <h2>Event Planning</h2>
          <p>
            We help plan your events with culinary and service solutions for a perfect celebration.
          </p>
        </div>

      </div>
    </main>
  );
}

export default ServiceHook;
