import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./AllMeals.css";

const ITEMS_PER_LOAD = 10;

function AllMeals() {
  const [allMeals, setAllMeals] = useState([]);
  const [visibleMeals, setVisibleMeals] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  const generatePrice = () =>
    Math.floor(Math.random() * (9000 - 2500 + 1)) + 2500;

  /* FETCH ALL MEALS ONCE */
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Beef")
      .then((res) => res.json())
      .then((data) => {
        if (data.meals) {
          const mealsWithPrice = data.meals.map((meal) => ({
            ...meal,
            price: generatePrice(),
          }));

          setAllMeals(mealsWithPrice);
          setVisibleMeals(mealsWithPrice.slice(0, ITEMS_PER_LOAD));
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  /* INFINITE SCROLL */
  useEffect(() => {
    const handleScroll = () => {
      const reachedBottom =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 200;

      if (
        reachedBottom &&
        !loadingMore &&
        visibleMeals.length < allMeals.length
      ) {
        loadMoreMeals();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleMeals, loadingMore, allMeals]);

  /* LOAD NEXT 10 WITH SPINNER */
  const loadMoreMeals = () => {
    setLoadingMore(true);

    setTimeout(() => {
      const nextPage = page + 1;
      const nextMeals = allMeals.slice(
        0,
        nextPage * ITEMS_PER_LOAD
      );

      setVisibleMeals(nextMeals);
      setPage(nextPage);
      setLoadingMore(false);
    }, 1200); // spinner delay
  };

  /* FIRST LOAD */
  if (loading) {
    return (
      <div className="loader-container">
        <div className="spinner"></div>
        <p className="loading-text">Loading...</p>
      </div>
    );
  }

  return (
    <main className="all-meals-container">
      <h1 className="all-meals-title">All Popular Meals</h1>

      <section className="all-meals-grid">
        {visibleMeals.map((meal) => (
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

              <span className="popular-view-details-btn">
                <p>View Details</p>
              </span>
            </div>
          </Link>
        ))}
      </section>

      {/* SPINNER BEFORE NEXT 10 */}
      {loadingMore && (
        <div className="loader-container small">
             <div className="spinner small-spinner"></div>
        </div>
      )}
    </main>
  );
}

export default AllMeals;
