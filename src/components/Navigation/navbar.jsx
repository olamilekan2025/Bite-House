import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import logo from "../../assets/BITE-removebg-preview.png"
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPages, setShowPages] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
    setShowPages(false);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setShowPages(false);
  };

  const handleDropdownEnter = () => setShowPages(true);
  const handleDropdownLeave = () => setShowPages(false);

  return (
    <header className="navbar-container">
      <NavLink to="/" className="logo" onClick={closeMenu}>
       <img src={logo} alt="" />
      </NavLink>

      <nav className={isOpen ? "nav-menu open" : "nav-menu"}>
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} 
          onClick={closeMenu}
        >
          Home
        </NavLink>

        <NavLink 
          to="/about" 
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} 
          onClick={closeMenu}
        >
          About Us
        </NavLink>

        <NavLink 
          to="/shop" 
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} 
          onClick={closeMenu}
        >
          Shop
        </NavLink>

        {/* Pages Dropdown */}
        <div 
          className="nav-link pages-dropdown" 
          onMouseEnter={handleDropdownEnter}
          onMouseLeave={handleDropdownLeave}
          onClick={() => setShowPages(!showPages)}
        >
          <button className="dropdown-toggle">
            Pages <FaChevronDown className={"down-icon" + (showPages ? " open" : "")} />
          </button>

          <div className={"dropdown-menu" + (showPages ? " show" : "")}>
            <NavLink to="/chef" onClick={closeMenu} className={({ isActive }) => isActive ? "dropdown-item active" : "dropdown-item"}>Chef</NavLink>
            <NavLink to="/menu" onClick={closeMenu} className={({ isActive }) => isActive ? "dropdown-item active" : "dropdown-item"}>Food Menu</NavLink>
            <NavLink to="/gallery" onClick={closeMenu} className={({ isActive }) => isActive ? "dropdown-item active" : "dropdown-item"}>Gallery</NavLink>
            <NavLink to="/services" onClick={closeMenu} className={({ isActive }) => isActive ? "dropdown-item active" : "dropdown-item"}>Services</NavLink>
            <NavLink to="/testimonials" onClick={closeMenu} className={({ isActive }) => isActive ? "dropdown-item active" : "dropdown-item"}>Testimonials</NavLink>
            <NavLink to="/reservation" onClick={closeMenu} className={({ isActive }) => isActive ? "dropdown-item active" : "dropdown-item"}>Reservation</NavLink>
            <NavLink to="/faq" onClick={closeMenu} className={({ isActive }) => isActive ? "dropdown-item active" : "dropdown-item"}>FAQ</NavLink>
            <NavLink to="/myAccount" onClick={closeMenu} className={({ isActive }) => isActive ? "dropdown-item active" : "dropdown-item"}>My Account</NavLink>
          </div>
        </div>

         <NavLink 
          to="/blog" 
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} 
          onClick={closeMenu}
        >
          Blog
        </NavLink>


         <NavLink 
          to="/contact" 
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} 
          onClick={closeMenu}
        >
          Contact
        </NavLink>


      </nav>

      <button className="menu-toggle" onClick={handleToggleMenu} aria-label="Toggle menu">
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>
    </header>
  );
}

export default Navbar;




// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
// import "./Navbar.css";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showPages, setShowPages] = useState(false);

//   const handleToggleMenu = () => {
//     setIsOpen(!isOpen);
//     setShowPages(false);
//   };

//   const closeMenu = () => {
//     setIsOpen(false);
//     setShowPages(false);
//   };

//   const toggleDropdown = () => {
//     setShowPages(prev => !prev);
//   };

//   return (
//     <header className="navbar-container">
//       <NavLink to="/" className="logo" onClick={closeMenu}>
//         BITEHOUSE
//       </NavLink>

//       <nav className={isOpen ? "nav-menu open" : "nav-menu"}>
//         <NavLink 
//           to="/" 
//           className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} 
//           onClick={closeMenu}
//         >
//           Home
//         </NavLink>

//         <NavLink 
//           to="/about" 
//           className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} 
//           onClick={closeMenu}
//         >
//           About Us
//         </NavLink>

//         <NavLink 
//           to="/shop" 
//           className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} 
//           onClick={closeMenu}
//         >
//           Shop
//         </NavLink>

//         {/* Pages Dropdown - ON CLICK */}
//         <div className="nav-link pages-dropdown" onClick={toggleDropdown}>
//           <button className="dropdown-toggle">
//             Pages 
//             <FaChevronDown className={`down-icon ${showPages ? "open" : ""}`} />
//           </button>

//           {showPages && (
//             <div className="dropdown-menu">
//               <NavLink to="/chef" className="dropdown-item" onClick={closeMenu}>Chef</NavLink>
//               <NavLink to="/food-menu" className="dropdown-item" onClick={closeMenu}>Food Menu</NavLink>
//               <NavLink to="/gallery" className="dropdown-item" onClick={closeMenu}>Gallery</NavLink>
//               <NavLink to="/service" className="dropdown-item" onClick={closeMenu}>Services</NavLink>
//               <NavLink to="/testimonial" className="dropdown-item" onClick={closeMenu}>Testimonials</NavLink>
//               <NavLink to="/reservation" className="dropdown-item" onClick={closeMenu}>Reservation</NavLink>
//               <NavLink to="/faq" className="dropdown-item" onClick={closeMenu}>FAQ</NavLink>
//               <NavLink to="/my-account" className="dropdown-item" onClick={closeMenu}>My Account</NavLink>
//             </div>
//           )}
//         </div>

//         <NavLink 
//           to="/blog" 
//           className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} 
//           onClick={closeMenu}
//         >
//           Blog
//         </NavLink>

//         <NavLink 
//           to="/contact" 
//           className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} 
//           onClick={closeMenu}
//         >
//           Contact
//         </NavLink>
//       </nav>

//       <button className="menu-toggle" onClick={handleToggleMenu}>
//         {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
//       </button>
//     </header>
//   );
// }

// export default Navbar;

