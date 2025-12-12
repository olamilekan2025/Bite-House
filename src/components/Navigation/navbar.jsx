
// import { useState, useEffect, useRef } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { FaBars, FaTimes, FaUser, FaSignOutAlt, FaChevronDown } from "react-icons/fa";
// import { BsCart4 } from "react-icons/bs";
// import { useAuth } from "../../context/AuthContext";
// import logo from "../../assets/BITE-removebg-preview.png";
// import "./Navbar.css";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showPages, setShowPages] = useState(false);
//   const [showUserDropdown, setShowUserDropdown] = useState(false);

//   const { user, logout } = useAuth();
//   const pagesRef = useRef();
//   const userRef = useRef();
//   const navigate = useNavigate();

// const getInitials = () => {
//   if (!user) return "NN";

//   // Check for firstName & lastName, fallback to name
//   if (user.firstName && user.lastName) {
//     return `${user.firstName[0]}${user.lastName[0]}`.toUpperCase();
//   }

//   if (user.name) {
//     const names = user.name.split(" ");
//     const first = names[0]?.[0] || "";
//     const last = names[1]?.[0] || "";
//     return `${first}${last}`.toUpperCase();
//   }

//   return "NN";
// };


//   useEffect(() => {
//     const handler = (e) => {
//       if (pagesRef.current && !pagesRef.current.contains(e.target)) setShowPages(false);
//       if (userRef.current && !userRef.current.contains(e.target)) setShowUserDropdown(false);
//     };
//     document.addEventListener("click", handler);
//     return () => document.removeEventListener("click", handler);
//   }, []);

//   const handleLogout = () => {
//     logout();
//     setShowUserDropdown(false);
//     navigate("/");
//   };

//   return (
//     <header className="navbar-container">
//       <NavLink to="/" className="logo">
//         <img src={logo} alt="BiteHouse" />
//       </NavLink>

//       <nav className={`nav-menu ${isOpen ? "open" : ""}`}>
//         <NavLink to="/" className="nav-link">Home</NavLink>
//         <NavLink to="/about" className="nav-link">About</NavLink>
//         <NavLink to="/shop" className="nav-link">Shop</NavLink>

//         <div className="pages-wrapper" ref={pagesRef}>
//           <button
//             className="nav-link dropdown-toggle"
//             onClick={() => setShowPages(!showPages)}
//             type="button"
//           >
//             Pages <FaChevronDown className={`down-icon ${showPages ? "open" : ""}`} />
//           </button>

//           {showPages && (
//             <div className="dropdown-menu show">
//               <NavLink to="/chef" className="dropdown-item">Chef</NavLink>
//               <NavLink to="/foodMenu" className="dropdown-item">Food Menu</NavLink>
//               <NavLink to="/gallery" className="dropdown-item">Gallery</NavLink>
//               <NavLink to="/reservation" className="dropdown-item">Reservation</NavLink>
//               <NavLink to="/services" className="dropdown-item">Services</NavLink>
//               <NavLink to="/testimonial" className="dropdown-item">Testimonial</NavLink>
//               <NavLink to="/faq" className="dropdown-item">FAQ</NavLink>
//             </div>
//           )}
//         </div>

//         <NavLink to="/blog" className="nav-link">Blog</NavLink>
//         <NavLink to="/contact" className="nav-link">Contact</NavLink>
//         <NavLink to="/cart" className="nav-link">Cart</NavLink>

//         {user ? (
//           <div className="user-wrapper" ref={userRef}>
//             <button
//               onClick={() => setShowUserDropdown(!showUserDropdown)}
//               className="initials-circle"
//               type="button"
//             >
//               {getInitials()}
//             </button>

//             {showUserDropdown && (
//               <div className="user-dropdown-menu show">
//   <div className="user-info">
//     <FaUser className="icon" />
//     <div>
//       <p className="user-name">
//         {user.firstName && user.lastName
//           ? `${user.firstName} ${user.lastName}`
//           : user.name || "No Name"}
//       </p>
//       <p className="user-email">{user.email}</p>
//     </div>
//   </div>
//   <hr />
//   <button onClick={handleLogout} className="details-logout-btn">
//     <FaSignOutAlt /> Logout
//   </button>
// </div>

//             )}
//           </div>
//         ) : (
//           <NavLink to="/myAccount" className="nav-link signup-btn">
//             Sign Up / Login
//           </NavLink>
//         )}
//       </nav>

//       <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? <FaTimes /> : <FaBars />}
//       </button>
//     </header>
//   );
// }

// export default Navbar;




import { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaUser, FaSignOutAlt, FaChevronDown } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";
import logo from "../../assets/BITE-removebg-preview.png";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPages, setShowPages] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  const { user, logout } = useAuth();
  const { getTotalItems } = useCart();

  const pagesRef = useRef();
  const userRef = useRef();
  const navigate = useNavigate();

  const cartCount = getTotalItems();

  const getInitials = () => {
    if (!user) return "NN";
    if (user.firstName && user.lastName) {
      return `${user.firstName[0]}${user.lastName[0]}`.toUpperCase();
    }
    if (user.name) {
      const names = user.name.split(" ");
      const first = names[0]?.[0] || "";
      const last = names[1]?.[0] || "";
      return `${first}${last}`.toUpperCase();
    }
    return "NN";
  };

  useEffect(() => {
    const handler = (e) => {
      if (pagesRef.current && !pagesRef.current.contains(e.target)) setShowPages(false);
      if (userRef.current && !userRef.current.contains(e.target)) setShowUserDropdown(false);
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  const handleLogout = () => {
    logout();
    setShowUserDropdown(false);
    navigate("/");
  };

  return (
    <header className="navbar-container">
      <NavLink to="/" className="logo">
        <img src={logo} alt="BiteHouse" />
      </NavLink>

      <nav className={`nav-menu ${isOpen ? "open" : ""}`}>
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/about" className="nav-link">About</NavLink>
        <NavLink to="/shop" className="nav-link">Shop</NavLink>

        <div className="pages-wrapper" ref={pagesRef}>
          <button
            className="nav-link dropdown-toggle"
            onClick={() => setShowPages(!showPages)}
            type="button"
          >
            Pages <FaChevronDown className={`down-icon ${showPages ? "open" : ""}`} />
          </button>

          {showPages && (
            <div className="dropdown-menu show">
              <NavLink to="/chef" className="dropdown-item">Chef</NavLink>
              <NavLink to="/foodMenu" className="dropdown-item">Food Menu</NavLink>
              <NavLink to="/gallery" className="dropdown-item">Gallery</NavLink>
              <NavLink to="/reservation" className="dropdown-item">Reservation</NavLink>
              <NavLink to="/services" className="dropdown-item">Services</NavLink>
              <NavLink to="/testimonial" className="dropdown-item">Testimonial</NavLink>
              <NavLink to="/faq" className="dropdown-item">FAQ</NavLink>
            </div>
          )}
        </div>

        <NavLink to="/blog" className="nav-link">Blog</NavLink>
        <NavLink to="/contact" className="nav-link">Contact</NavLink>

        {/* Cart Link with Count */}
        <NavLink to="/cart" className="nav-link cart-link">
          <BsCart4 />
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </NavLink>

        {user ? (
          <div className="user-wrapper" ref={userRef}>
            <button
              onClick={() => setShowUserDropdown(!showUserDropdown)}
              className="initials-circle"
              type="button"
            >
              {getInitials()}
            </button>

            {showUserDropdown && (
              <div className="user-dropdown-menu show">
                <div className="user-info">
                  <FaUser className="icon" />
                  <div>
                    <p className="user-name">
                      {user.firstName && user.lastName
                        ? `${user.firstName} ${user.lastName}`
                        : user.name || "No Name"}
                    </p>
                    <p className="user-email">{user.email}</p>
                  </div>
                </div>
                <hr />
                <button onClick={handleLogout} className="details-logout-btn">
                  <FaSignOutAlt /> Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <NavLink to="/myAccount" className="nav-link signup-btn">
            Sign Up / Login
          </NavLink>
        )}
      </nav>

      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
    </header>
  );
}

export default Navbar;

