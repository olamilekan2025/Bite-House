import "./Footer.css";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { BsEnvelopeAt } from "react-icons/bs";
import logo from "../../assets/BITE-removebg-preview.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img src={logo} alt="" />

          <p>
            Taste the bite of happiness. At BiteHouse, we serve creative dishes
            using fresh ingredients, handcrafted recipes, and bold flavors that
            create unforgettable dining moments.
          </p>
        </div>

        <div className="footer-links">
          <h3>Explore</h3>
          <ul>
            <li>
              <MdKeyboardDoubleArrowLeft />
              <a href="/">Home</a>
            </li>
            <li>
              <MdKeyboardDoubleArrowLeft />
              <a href="shop">Shop</a>
            </li>
            <li>
              <MdKeyboardDoubleArrowLeft />
              <a href="#">Reservation</a>
            </li>
            <li>
              <MdKeyboardDoubleArrowLeft />
              <a href="/faq">Faq</a>
            </li>
            <li>
              <MdKeyboardDoubleArrowLeft />
              <a href="contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/OladunjoyeOlamilekan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/oladunjoyejelil"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/2349129069652"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>

          <h3 className="address-title">Address</h3>
          <p className="footer-address">
            24, Market Square Avenue
            <br />
            Victoria Island, Lagos, Nigeria
            <br />
            Phone:
            <a href="tel:+2349129069652">+234 912 906 9652</a>
            <br />
            Email:
            <a href="mailto:jelilioladunjoye04@gmail.com">
              jelilioladunjoye04@gmail.com
            </a>
          </p>
        </div>

        <div className="footer-subscribe">
          <h3>Subscribe to Our Newsletter</h3>
          <p>Get exclusive offers, seasonal dishes, and food stories.</p>

          <div className="subscribe-box">
            <input type="email" placeholder="Enter your email" required />
            <button>
              <BsEnvelopeAt />
            </button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} BiteHouse. <span>Jel Dev</span> All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
