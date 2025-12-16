import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./PopularFood.css";
import { GiHotMeal } from "react-icons/gi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function PopularFood() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  /* SLIDER REF */
  const sliderRef = useRef(null);

  /* DRAG STATE */
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  /* DRAG HANDLERS */
  const startDragging = (e) => {
    isDragging.current = true;
    startX.current = e.pageX || e.touches[0].pageX;
    scrollLeft.current = sliderRef.current.scrollLeft;
  };

  const stopDragging = () => {
    isDragging.current = false;
  };

  const onDrag = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX || e.touches[0].pageX;
    sliderRef.current.scrollLeft =
      scrollLeft.current - (x - startX.current) * 2;
  };

  /* 🔥 SCROLL 4 CARDS */
  const getScrollAmount = () => {
    const card = sliderRef.current?.querySelector(".meal-cardss");
    if (!card) return 0;
    return (card.offsetWidth + 20) * 4;
  };

  const scrollNext = () => {
    sliderRef.current.scrollBy({ left: getScrollAmount(), behavior: "smooth" });
  };

  const scrollPrev = () => {
    sliderRef.current.scrollBy({ left: -getScrollAmount(), behavior: "smooth" });
  };

  /* PRICE */
  const generatePrice = () =>
    Math.floor(Math.random() * (9000 - 2500 + 1)) + 2500;

  /* FETCH */
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Beef")
      .then((res) => res.json())
      .then((data) => {
        if (data.meals) {
          setMeals(
            data.meals.map((meal) => ({
              ...meal,
              price: generatePrice(),
            }))
          );
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div className="loader-container">
        <div className="spinner"></div>
        <p className="loading-text">Loading...</p>
      </div>
    );

  return (
    <main className="meal-container">
      <div className="best-food">
        <p>
          <GiHotMeal style={{ color: "#23B12C" }} /> BEST FOOD{" "}
          <GiHotMeal style={{ color: "#23B12C" }} />
        </p>
      </div>

      <div className="meal-header">
        <h1 className="meal-title">Popular Food Items</h1>
        <Link to="/all-meals" className="view-more-link">
          View All →
        </Link>
      </div>

      <div className="slider-wrapper">
        <button className="slider-arrow left" onClick={scrollPrev}>
          <FaChevronLeft />
        </button>

        <section
          className="meal-slider"
          ref={sliderRef}
          onMouseDown={startDragging}
          onMouseUp={stopDragging}
          onMouseLeave={stopDragging}
          onMouseMove={onDrag}
          onTouchStart={startDragging}
          onTouchEnd={stopDragging}
          onTouchMove={onDrag}
        >
          {meals.slice(0, 10).map((meal) => (
            <Link
              key={meal.idMeal}
              to={`/meal/${meal.idMeal}`}
              className="meal-cardss link-card"
            >
              <img src={meal.strMealThumb} alt={meal.strMeal} />

              <div className="meal-detailss">
                <h3>{meal.strMeal}</h3>

                <div className="meal-price-counrty-details">
                  <p>₦{meal.price.toLocaleString()}</p>
                  <span>{meal.strArea}</span>
                </div>

                <span className="popular-view-details-btn"><p>View Details</p></span>
              </div>
            </Link>
          ))}
        </section>

        <button className="slider-arrow right" onClick={scrollNext}>
          <FaChevronRight />
        </button>
      </div>
    </main>
  );
}

export default PopularFood;
