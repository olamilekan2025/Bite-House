import React, { useEffect, useRef, useState } from "react";
import { BsCart4 } from "react-icons/bs";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import "./AllDishes.css";

const ITEMS_PER_LOAD = 10;

const AllDishes = () => {
  const [meals, setMeals] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);
  const [loadingMore, setLoadingMore] = useState(false);
  const [quantities, setQuantities] = useState({}); // store qty per meal

  const loaderRef = useRef(null);
  const { addToCart } = useCart();

  // Fetch meals once
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Chicken")
      .then((res) => res.json())
      .then((data) => {
        const mealsWithPrice = (data.meals || []).map((meal) => ({
          ...meal,
          price: 1500,
        }));
        setMeals(mealsWithPrice);
        // initialize quantities to 1
        const initialQuantities = {};
        mealsWithPrice.forEach((meal) => {
          initialQuantities[meal.idMeal] = 1;
        });
        setQuantities(initialQuantities);
      });
  }, []);

  // Infinite scroll observer
  useEffect(() => {
    if (!loaderRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          !loadingMore &&
          visibleCount < meals.length
        ) {
          setLoadingMore(true);

          setTimeout(() => {
            setVisibleCount((prev) => prev + ITEMS_PER_LOAD);
            setLoadingMore(false);
          }, 1000);
        }
      },
      { threshold: 1 }
    );

    observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, [loadingMore, visibleCount, meals.length]);

  // Update quantity for a meal
  const handleQtyChange = (id, delta) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, prev[id] + delta),
    }));
  };

  return (
    <div className="all-dishes-container">
      <h1 className="all-dishes-title">All Dishes</h1>

      <div className="all-dishes-grid">
        {/* Render meals */}
        {meals.slice(0, visibleCount).map((meal) => (
          <div key={meal.idMeal} className="dish-card">
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="dish-image"
            />

            <div className="dish-name-category">
              <h3 className="dish-name">{meal.strMeal}</h3>
              <p className="dish-category">{meal.strCategory}</p>

            

              {/* Add to Cart */}
              <button
                className="all-dish-add-btn"
                onClick={() => addToCart(meal, quantities[meal.idMeal] || 1)}
              >
                <BsCart4 /> Add to Cart
              </button>
            </div>
          </div>
        ))}

        {/* Spinner loaders before next 10 */}
        {loadingMore &&
          Array.from({ length: 10 }).map((_, i) => (
            <div key={`spinner-${i}`} className="dish-card skeleton-card">
              <div className="spinner"></div>
            </div>
          ))}
      </div>

      {/* Observer target */}
      <div ref={loaderRef} className="observer-trigger" />
    </div>
  );
};

export default AllDishes;
