import "./Footer.css";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import logo from "../../assets/BITE-removebg-preview.png"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">

        {/* LEFT - Logo + About */}
        <div className="footer-brand">
          <h2 className="footer-logo">
         
            <img src={logo} alt="" />
          
          </h2>
          <p>
            Taste the bite of happiness. At BiteHouse,
            we serve creative dishes using fresh ingredients,
            handcrafted recipes, and bold flavors that create
            unforgettable dining moments.
          </p>
        </div>

        {/* MIDDLE - Navigation */}
        <div className="footer-links">
          <h3>Explore</h3>
          <ul>
            <li><MdKeyboardDoubleArrowLeft /><a href="#">Home</a></li>
            <li><MdKeyboardDoubleArrowLeft /><a href="#">Menu</a></li>
            <li><MdKeyboardDoubleArrowLeft /><a href="#">Reservation</a></li>
            <li><MdKeyboardDoubleArrowLeft /><a href="#">Gallery</a></li>
            <li><MdKeyboardDoubleArrowLeft /><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* RIGHT - Social + Address */}
        <div className="footer-contact">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaWhatsapp /></a>
          </div>

          <h3 className="address-title">Address</h3>
          <p className="footer-address">
            24, Market Square Avenue<br />
            Victoria Island, Lagos, Nigeria<br />
            Phone: +234 803 123 4567
          </p>
        </div>

      </div>

      {/* Subscribe Section */}
      <div className="footer-subscribe">
        <h3>Subscribe to Our Newsletter</h3>
        <p>Get exclusive offers, seasonal dishes, and food stories.</p>

        <div className="subscribe-box">
          <input type="email" placeholder="Enter your email" required />
          <button>Subscribe</button>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} BiteHouse. All rights reserved.</p>
      </div>

    </footer>
  )
}

export default Footer;
