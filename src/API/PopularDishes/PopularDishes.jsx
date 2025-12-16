import React, { useEffect, useState, useRef } from "react";
import { FaEye, FaPlus, FaMinus } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./PopularDishes.css";

const PopularDishes = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [qty, setQty] = useState(1);

  const { addToCart } = useCart();
  const sliderRef = useRef(null);

  // Fetch meals
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Chicken")
      .then((res) => res.json())
      .then((data) => {
        const mealsWithPrice = (data.meals || []).map((meal) => ({
          ...meal,
          price: 1500,
        }));
        setMeals(mealsWithPrice);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <h2 className="loading">Loading Popular Dishes...</h2>;

  const handleAddToCart = (meal, quantity) => {
    const success = addToCart({ ...meal, price: meal.price }, quantity);
    if (success) {
      alert(`${meal.strMeal} x${quantity} added to cart!`);
      setSelectedMeal(null);
    } else {
      alert("Please login before adding to cart!");
    }
  };

  // Scroll buttons only
  const scrollNext = () => {
    sliderRef.current.scrollBy({ left: 320, behavior: "smooth" });
  };

  const scrollBack = () => {
    sliderRef.current.scrollBy({ left: -320, behavior: "smooth" });
  };

  return (
    <div className="popular-container">
      <div className="popular-dishes-header">
        <h1 className="title">POPULAR DISHES</h1>
        <Link to="/all-dishes" className="popular-view-more-btn">
          View All
        </Link>
      </div>

      {/* Carousel Buttons */}
      <div className="carousel-buttons">
        <button className="scroll-btn back" onClick={scrollBack}>‹</button>
        <button className="scroll-btn next" onClick={scrollNext}>›</button>
      </div>

      {/* Render ONLY 4 cards */}
      <div className="dishes-grid" ref={sliderRef}>
        {meals.slice(0, 10).map((meal) => (
          <div key={meal.idMeal} className="dish-card">
            <div className="icon-wrapper">
              <BsCart4
                className="icon"
                onClick={() => handleAddToCart(meal, 1)}
              />
              <FaEye
                className="icon"
                onClick={() => {
                  setSelectedMeal(meal);
                  setQty(1);
                }}
              />
            </div>

            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="dish-image"
            />
            <div className="dish-name-category">

            <h3 className="dish-name">{meal.strMeal}</h3>
            <p className="dish-category">{meal.strCategory}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedMeal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <img
              src={selectedMeal.strMealThumb}
              alt={selectedMeal.strMeal}
              className="modal-img"
            />
            <h2>{selectedMeal.strMeal}</h2>
            <p>
              {selectedMeal.strArea} Dish • Category: {selectedMeal.strCategory}
            </p>

            <div className="qty-box">
              <FaMinus
                className="qty-btn"
                onClick={() => qty > 1 && setQty(qty - 1)}
              />
              <span className="qty-num">{qty}</span>
              <FaPlus
                className="qty-btn"
                onClick={() => setQty(qty + 1)}
              />
            </div>

            <h3 className="total-price">₦{qty * selectedMeal.price}</h3>

            <button
              className="add-btn"
              onClick={() => handleAddToCart(selectedMeal, qty)}
            >
              Add to Cart
            </button>

            <button className="close-btn" onClick={() => setSelectedMeal(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopularDishes;
