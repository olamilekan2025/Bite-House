import "./Shop.css";
import { useEffect } from "react";
import SwitchMeals from "../../Utils/SwitchMeals/switchMeals";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

function Shop() {
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
    <main className="shop">
     
      <div className="text-block" data-aos="fade-right">
        <div className="shop-text-wrapper">
          <span>Welcome to Bite House Shop</span>
          <p>
            Discover our exclusive collection of signature Bite House sauces,
            crispy mixes, pepper blends, and custom spice ingredients designed
            to bring the real taste of Bite House to your kitchen.
          </p>
          <p>
            Every product is made with carefully selected ingredients and
            crafted by our culinary experts to ensure premium taste and quality
            in every bite. Bring the restaurant experience home.
          </p>

          <button className="shop-btn-container">
            <Link to="/" >Home</Link> / <Link>Shop</Link>
          </button>
        </div>
      </div>

   
      <div className="image-block" data-aos="fade-left">
        <img
          src="https://res.cloudinary.com/divio4grm/image/upload/v1765381231/istockphoto-2239895795-612x612_tkfmjd.jpg"
          alt="Shop Bite House Products"
          />
      </div>
    </main>
    <SwitchMeals/>
          </>
  );
}

export default Shop;




// import "./Shop.css";
// import { useEffect } from "react";
// import SwitchMeals from "../../Utils/SwitchMeals/switchMeals";
// import { Link } from "react-router-dom";
// import Aos from "aos";
// import "aos/dist/aos.css";

// function Shop({ searchTerm }) {
//   useEffect(() => {
//     Aos.init({
//       offset: 120,
//       duration: 700,
//       easing: "ease-in-out",
//       delay: 100,
//       once: true,
//     });
//   }, []);

//   return (
//     <>
//       <main className="shop">
//         <div className="text-block" data-aos="fade-right">
//           <div className="shop-text-wrapper">
//             <span>Welcome to Bite House Shop</span>

//             <p>
//               Discover our exclusive collection of signature Bite House sauces,
//               crispy mixes, pepper blends, and custom spice ingredients.
//             </p>

//             <p>
//               Every product is made with carefully selected ingredients for
//               premium taste and quality.
//             </p>

//             <button className="shop-btn-container">
//               <Link to="/">Home</Link> / <Link to="/shop">Shop</Link>
//             </button>
//           </div>
//         </div>

//         <div className="image-block" data-aos="fade-left">
//           <img
//             src="https://res.cloudinary.com/divio4grm/image/upload/v1765381231/istockphoto-2239895795-612x612_tkfmjd.jpg"
//             alt="Shop Bite House Products"
//           />
//         </div>
//       </main>

//       {/* 🔍 SEARCH PASSED HERE */}
//       <SwitchMeals searchTerm={searchTerm} />
//     </>
//   );
// }

// export default Shop;

