


import React, { useEffect, useState } from "react";
import { FaEye, FaPlus, FaMinus } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import { useCart } from "../../context/CartContext"; 
import "./PopularDishes.css";

const PopularDishes = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(6);

  const [selectedMeal, setSelectedMeal] = useState(null);
  const [qty, setQty] = useState(1);

  const navigate = useNavigate();
  const { addToCart } = useCart(); // get addToCart from context

  // Fetch meals
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Chicken")
      .then((res) => res.json())
      .then((data) => {
        const mealsWithPrice = (data.meals || []).map((meal) => ({
          ...meal,
          price: 1500, // default price
        }));
        setMeals(mealsWithPrice);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <h2 className="loading">Loading Popular Dishes...</h2>;

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const handleAddToCart = (meal, quantity) => {
    const success = addToCart({ ...meal, price: meal.price }, quantity);
    if (success) {
      alert(`${meal.strMeal} x${quantity} added to cart!`);
      setSelectedMeal(null);
    } else {
      alert("Please login before add to cart!");
    }
  };

  return (
    <div className="popular-container">
      <h1 className="title">POPULAR DISHES</h1>

      <div className="dishes-grid">
        {meals.slice(0, visibleCount).map((meal) => (
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

            <img src={meal.strMealThumb} alt={meal.strMeal} className="dish-image" />
            <h3 className="dish-name">{meal.strMeal}</h3>
            <p className="dish-category">{meal.strCategory}</p>
          </div>
        ))}
      </div>

      {visibleCount < meals.length && (
        <button className="popular-view-more-btn" onClick={handleViewMore}>
          View More
        </button>
      )}

      {selectedMeal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <img src={selectedMeal.strMealThumb} alt="" className="modal-img" />
            <h2>{selectedMeal.strMeal}</h2>
            <p>{selectedMeal.strArea} Dish • Category: {selectedMeal.strCategory}</p>

            <div className="qty-box">
              <FaMinus
                onClick={() => qty > 1 && setQty(qty - 1)}
                className="qty-btn"
              />
              <span className="qty-num">{qty}</span>
              <FaPlus
                onClick={() => setQty(qty + 1)}
                className="qty-btn"
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


