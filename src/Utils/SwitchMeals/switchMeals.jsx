import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaNairaSign } from "react-icons/fa6";
import "./SwitchMeals.css";

const ITEMS_PER_LOAD = 5;

const SwitchMeals = () => {
  const [category, setCategory] = useState("vegetable");
  const [meals, setMeals] = useState([]);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);
  const [loading, setLoading] = useState(false);

  const loaderRef = useRef(null);
  const navigate = useNavigate();

  const getApiUrl = (type) => {
    switch (type) {
      case "vegetable":
        return "https://www.themealdb.com/api/json/v1/1/filter.php?i=Vegetable%20Oil";
      case "rice":
        return "https://www.themealdb.com/api/json/v1/1/filter.php?i=Basmati%20Rice";
      case "leaf":
        return "https://www.themealdb.com/api/json/v1/1/filter.php?i=Bay%20Leaf";
      case "chicken":
        return "https://www.themealdb.com/api/json/v1/1/filter.php?i=Chicken";
      default:
        return "";
    }
  };

  useEffect(() => {
    const fetchMeals = async () => {
      setLoading(true);
      setVisibleCount(ITEMS_PER_LOAD);
      try {
        const res = await fetch(getApiUrl(category));
        const data = await res.json();
        if (data.meals) {
          const mealsWithExtras = data.meals.map((meal) => ({
            ...meal,
            price: (Math.random() * 20 + 5).toFixed(2),
            rating: (Math.random() * 2 + 3).toFixed(1),
            description:
              "Delicious " +
              meal.strMeal +
              " prepared with fresh ingredients for a delightful taste.",
          }));
          setMeals(mealsWithExtras);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMeals();
  }, [category]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visibleCount < meals.length) {
          setTimeout(() => {
            setVisibleCount((prev) => prev + ITEMS_PER_LOAD);
          }, 600);
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [visibleCount, meals.length]);

  const categories = [
    { key: "vegetable", label: "Vegetable Oil" },
    { key: "rice", label: "Basmati Rice" },
    { key: "leaf", label: "Bay Leaf" },
    { key: "chicken", label: "Chicken" },
  ];

  return (
    <section className="switch-layout">
      <main className="meal-panel">
        <span>Bite House Menu</span>

        <div className="switch-panel top">
          {categories.map((cat) => (
            <button
              key={cat.key}
              className={category === cat.key ? "active" : ""}
              onClick={() => setCategory(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="meal-grid">
          {loading
            ? Array.from({ length: ITEMS_PER_LOAD }).map((_, i) => (
                <div className="meal-card" key={i}>
                  <div className="skeleton skeleton-image"></div>
                  <div className="mealtext">
                    <div className="skeleton skeleton-text title"></div>
                    <div className="skeleton skeleton-text desc"></div>
                    <div className="skeleton skeleton-text price"></div>
                  </div>
                </div>
              ))
            : meals.slice(0, visibleCount).map((meal) => (
                <div className="meal-cards" key={meal.idMeal}>
                  <img src={meal.strMealThumb} alt={meal.strMeal} />
                  <div className="mealtext">
                    <h4>{meal.strMeal}</h4>
                    <p className="meal-description">
                      {meal.description.split(" ").slice(0, 5).join(" ")}...
                    </p>
                    <p className="meal-rating">
                      {"★".repeat(Math.floor(meal.rating)) +
                        "☆".repeat(5 - Math.floor(meal.rating))}{" "}
                      ({meal.rating})
                    </p>
                    <div className="meal-price-rate">
                      <p className="meal-price"><FaNairaSign />{meal.price}</p>
                      <button
                        className="switch-view-more-btn"
                        onClick={() => navigate(`/meal/${meal.idMeal}`)}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
        </div>

        {!loading && visibleCount < meals.length && (
          <div ref={loaderRef} className="scroll-loader">
            <span className="spinner small"></span>
          </div>
        )}
      </main>
    </section>
  );
};

export default SwitchMeals;
