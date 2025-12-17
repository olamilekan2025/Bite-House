
import { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaUser, FaSignOutAlt } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";
import logo from "../../assets/BITE-removebg-preview.png";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  const { user, logout } = useAuth();
  const { getTotalItems } = useCart();
  const navigate = useNavigate();
  const userRef = useRef(); // Now used for both desktop and mobile dropdown

  const cartCount = getTotalItems();

  const closeMenu = () => setIsOpen(false);
  const closeDropdown = () => setShowUserDropdown(false);

  const toggleUserDropdown = () => setShowUserDropdown(prev => !prev);

  const handleLogout = () => {
    logout();
    closeDropdown();
    closeMenu();
    navigate("/");
  };

  const getInitials = () => {
    if (!user) return "NN";
    if (user.firstName && user.lastName)
      return `${user.firstName[0]}${user.lastName[0]}`.toUpperCase();
    if (user.name) {
      const names = user.name.split(" ");
      return `${names[0]?.[0] || ""}${names[1]?.[0] || ""}`.toUpperCase();
    }
    return "NN";
  };

  // Close dropdown when clicking outside (works on mobile too)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (userRef.current && !userRef.current.contains(e.target)) {
        setShowUserDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="navbar-container">
      {/* Logo */}
      <NavLink
        to="/"
        className="logo-link"
        onClick={() => {
          closeMenu();
          closeDropdown();
        }}
      >
        <img src={logo} alt="BiteHouse" className="logo-img" />
      </NavLink>

      {/* Main Navigation Menu */}
      <nav className={`nav-menu ${isOpen ? "open" : ""}`}>
        <NavLink to="/about" className="nav-link" onClick={closeMenu}>About</NavLink>
        <NavLink to="/shop" className="nav-link" onClick={closeMenu}>Shop</NavLink>
        <NavLink to="/blog" className="nav-link" onClick={closeMenu}>Blog</NavLink>
        <NavLink to="/contact" className="nav-link" onClick={closeMenu}>Contact</NavLink>
        <NavLink to="/faq" className="nav-link" onClick={closeMenu}>Faq</NavLink>

        <NavLink to="/cart" className="cart-desktop-link" onClick={closeMenu}>
          <BsCart4 className="cart-icon" />
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </NavLink>

        {/* Desktop User Section */}
        {user ? (
          <div className="user-wrapper desktop-user" ref={userRef}>
            <button
              className="initials-circle"
              onClick={toggleUserDropdown}
            >
              {getInitials()}
            </button>

            <div className={`user-dropdown-menu ${showUserDropdown ? "show" : ""}`}>
              <div className="user-info">
                <FaUser className="user-icon" />
                <div>
                  <p className="user-name">
                    {user.firstName && user.lastName
                      ? `${user.firstName} ${user.lastName}`
                      : user.name || "User"}
                  </p>
                  <p className="user-email">{user.email}</p>
                </div>
              </div>
              <hr />
              <button onClick={handleLogout} className="logout-btn">
                <FaSignOutAlt /> Logout
              </button>
            </div>
          </div>
        ) : (
          <NavLink to="/myAccount" className="signup-btn" onClick={closeMenu}>
            Sign Up / Login
          </NavLink>
        )}
      </nav>

      {/* Mobile Top Bar Icons */}
      <div className="mobile-right">
        {/* Cart */}
        <NavLink to="/cart" className="cart-mobile-link" onClick={closeMenu}>
          <BsCart4 className="cart-icon" />
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </NavLink>

        {/* Mobile User Initials + Dropdown */}
        {user ? (
          <div className="user-wrapper mobile-user" ref={userRef}>
            <button
              className="initials-circle mobile-initials"
              onClick={toggleUserDropdown}
            >
              {getInitials()}
            </button>

            {/* Dropdown appears on mobile when clicked */}
            <div className={`user-dropdown-menu mobile ${showUserDropdown ? "show" : ""}`}>
              <div className="user-info">
                <FaUser className="user-icon" />
                <div>
                  <p className="user-name">
                    {user.firstName && user.lastName
                      ? `${user.firstName} ${user.lastName}`
                      : user.name || "User"}
                  </p>
                  <p className="user-email">{user.email}</p>
                </div>
              </div>
              <hr />
              <button onClick={handleLogout} className="logout-btn">
                <FaSignOutAlt /> Logout
              </button>
            </div>
          </div>
        ) : (
          <NavLink to="/myAccount" className="mobile-login-icon" onClick={closeMenu}>
            <FaUser />
          </NavLink>
        )}

        {/* Hamburger */}
        <button
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
