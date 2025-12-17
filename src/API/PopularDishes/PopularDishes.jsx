import React, { useEffect, useState, useRef } from "react";
import { FaEye } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./PopularDishes.css";

const PopularDishes = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useCart();
  const sliderRef = useRef(null);
  const navigate = useNavigate();

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

  const handleAddToCart = (meal) => {
    const success = addToCart(meal, 1);
    if (success) {
      alert(`${meal.strMeal} added to cart!`);
    } else {
      alert("Please login before adding to cart!");
    }
  };

  // Scroll buttons
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

      {/* Dishes */}
      <div className="dishes-grid" ref={sliderRef}>
        {meals.slice(0, 10).map((meal) => (
          <div key={meal.idMeal} className="dish-card">
            <div className="icon-wrapper">
              <BsCart4
                className="icon"
                onClick={() => handleAddToCart(meal)}
              />
              <FaEye
                className="icon"
                onClick={() => navigate(`/dish/${meal.idMeal}`)}
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
    </div>
  );
};

export default PopularDishes;
