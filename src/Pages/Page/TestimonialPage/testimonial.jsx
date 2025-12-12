// import "./Testimonial.css"

// function Testimonial() {
//     return (
//         <main className="testimonial">
//             <div className="testimonial-container">
//                 <h1>Customer Testimonials</h1>
//                 <p>See what our happy customers have to say.</p>
//             </div>
//         </main>
//     )
// }

// export default Testimonial



import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Testimonial.css";

function Testimonial() {
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
    <main className="testimonial-page">
      {/* HEADER */}
      <div className="testimonial-header" data-aos="fade-down">
        <h1>What Our Customers Say</h1>
        <p>
          Hear from our satisfied customers and food lovers. Bite House is committed
          to delivering authentic flavors and a memorable dining experience.
        </p>
      </div>

      {/* TESTIMONIAL GRID */}
      <div className="testimonial-grid">

        {/* CARD 1 */}
        <div className="testimonial-card" data-aos="fade-up">
          <div className="testimonial-image">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="John Doe"/>
          </div>
          <p className="testimonial-quote">"Bite House has the best spicy fried chicken I've ever tasted! Highly recommended."</p>
          <h3 className="testimonial-name">John Doe</h3>
          <span className="testimonial-role">Food Blogger</span>
        </div>

        {/* CARD 2 */}
        <div className="testimonial-card" data-aos="fade-up" data-aos-delay="100">
          <div className="testimonial-image">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Jane Smith"/>
          </div>
          <p className="testimonial-quote">"The flavors are authentic and delicious. The team really knows their craft."</p>
          <h3 className="testimonial-name">Jane Smith</h3>
          <span className="testimonial-role">Chef</span>
        </div>

        {/* CARD 3 */}
        <div className="testimonial-card" data-aos="fade-up" data-aos-delay="200">
          <div className="testimonial-image">
            <img src="https://randomuser.me/api/portraits/men/56.jpg" alt="Mark Wilson"/>
          </div>
          <p className="testimonial-quote">"Excellent service, fast delivery, and the food quality is top-notch. I’m impressed!"</p>
          <h3 className="testimonial-name">Mark Wilson</h3>
          <span className="testimonial-role">Entrepreneur</span>
        </div>

        {/* CARD 4 */}
        <div className="testimonial-card" data-aos="fade-up" data-aos-delay="300">
          <div className="testimonial-image">
            <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Emily Clark"/>
          </div>
          <p className="testimonial-quote">"A unique dining experience with amazing flavors and attention to detail."</p>
          <h3 className="testimonial-name">Emily Clark</h3>
          <span className="testimonial-role">Food Critic</span>
        </div>

        {/* CARD 5 */}
        <div className="testimonial-card" data-aos="fade-up" data-aos-delay="400">
          <div className="testimonial-image">
            <img src="https://randomuser.me/api/portraits/men/72.jpg" alt="David Lee"/>
          </div>
          <p className="testimonial-quote">"From catering to delivery, every service is executed with perfection. Loved it!"</p>
          <h3 className="testimonial-name">David Lee</h3>
          <span className="testimonial-role">Event Planner</span>
        </div>

        {/* CARD 6 */}
        <div className="testimonial-card" data-aos="fade-up" data-aos-delay="500">
          <div className="testimonial-image">
            <img src="https://randomuser.me/api/portraits/women/80.jpg" alt="Sophia Brown"/>
          </div>
          <p className="testimonial-quote">"Bite House truly brings restaurant quality to your home. Fantastic taste and service."</p>
          <h3 className="testimonial-name">Sophia Brown</h3>
          <span className="testimonial-role">Food Enthusiast</span>
        </div>

      </div>
    </main>
  );
}

export default Testimonial;

