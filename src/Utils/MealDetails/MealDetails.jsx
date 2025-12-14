import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaNairaSign } from "react-icons/fa6";
import { FaStar, FaArrowLeft, FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import "./MealDetails.css";

const MealDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [qty, setQty] = useState(1);

  const price = Number((Math.random() * 20 + 5).toFixed(2));
  const rating = (Math.random() * 2 + 3).toFixed(1);

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await res.json();
        if (data.meals) setMeal(data.meals[0]);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMeal();
  }, [id]);

  if (loading) {
    return (
      <section className="meal-details">
        <div className="details-card skeleton-card">
          <div className="skeleton-img"></div>
          <div className="skeleton-content">
            <div className="skeleton-line title"></div>
            <div className="skeleton-line"></div>
            <div className="skeleton-line"></div>
            <div className="skeleton-line price"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="meal-details">
      <div className="details-card">
        <img src={meal.strMealThumb} alt={meal.strMeal} />

        <div className="details-content">
          <div className="meal-deatils-back-menu">
            <h2>
              <span>
                {" "}
                <button className="meal-back-btn" onClick={() => navigate(-1)}>
                  <FaArrowLeft />
                </button>
              </span>
                 {meal.strMeal}
            </h2>
          </div>

          <div className="rating">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={i < Math.round(rating) ? "active" : ""}
              />
            ))}
            <span>({rating})</span>
          </div>

          <p className="meta">
            <span>{meal.strCategory}</span>
            <span>{meal.strArea}</span>
          </p>

          <p className="instructions">{meal.strInstructions}</p>

          <div className="quantity">
            <button onClick={() => qty > 1 && setQty(qty - 1)}>-</button>
            <span>{qty}</span>
            <button onClick={() => setQty(qty + 1)}>+</button>
          </div>

          <p className="price">
            <FaNairaSign /> {(price * qty).toFixed(2)}
          </p>

          {/* Actions */}
          <div className="actions">
            <button
              className="add-cart"
              onClick={() => {
                const success = addToCart({
                  idMeal: meal.idMeal,
                  strMeal: meal.strMeal,
                  strMealThumb: meal.strMealThumb,
                  price,
                  quantity: qty,
                });

                if (!success) {
                  alert("Please login to add items to cart");
                  navigate("/myAccount");
                }
              }}
            >
              <FaShoppingCart /> Add to Cart
            </button>

            <button
              className="order-now"
              onClick={() => {
                const success = addToCart({
                  idMeal: meal.idMeal,
                  strMeal: meal.strMeal,
                  strMealThumb: meal.strMealThumb,
                  price,
                  quantity: qty,
                });

                if (success) {
                  navigate("/cart");
                } else {
                  alert("Please login to continue");
                  navigate("/myAccount");
                }
              }}
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MealDetails;
