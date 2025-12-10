import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Info from "../../Utils/InfoPage/infor";
import Aos from "aos";
import 'aos/dist/aos.css';
import "./Contact.css"


function Contact() {
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
      <div className="contact-container">
        <div className="contact-text-wrapper" data-aos="fade-right">
          <span>Get In Touch With Bite House</span>
          <p>
            We’re here to serve you. Whether you have a reservation request,
            catering enquiry, or feedback about your experience, send us a
            message — we’ll reply as soon as possible.
          </p>

          <div className="button-container" data-aos="fade-down-right">
            <Link to="/">Home/</Link><span>Contact</span>
          </div>
        </div>
        <div className="contact-image-wrapper"data-aos="fade-left">
            <img src="https://res.cloudinary.com/divio4grm/image/upload/v1765311921/istockphoto-1303810862-612x612_uez4lq.jpg" alt="" />
        </div>
      </div>


      <div className="contact-form-wrapper">
  <div className="formContainer">
    <h2>Send Us A Message</h2>
    <p>
      Have a question or request? Send us a message — our team will respond
      shortly.
    </p>

    <form>
      <div className="form-row">
        <input type="text" name="firstName" placeholder="First Name" required />
        <input type="text" name="lastName" placeholder="Last Name" required />
      </div>

      <input type="email" name="email" placeholder="Email Address" required />
      <input type="text" name="phone" placeholder="Phone Number" required />
      <textarea
        name="message"
        placeholder="Enter Your Message"
        rows="6"
      ></textarea>

      <button className="contact-button" type="submit">Send Message</button>
    </form>
  </div>

  <div className="contact-image"data-aos="zoom-in">
    <img
      src="https://res.cloudinary.com/divio4grm/image/upload/v1765311144/contact-1_gpbmwp.png"
      alt="Contact"
    />
  </div>
</div>
<Info/>

    </>
  );
}

export default Contact;
