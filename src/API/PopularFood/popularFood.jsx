
import React, { useState, useEffect } from "react";
import { useCart } from "../../context/CartContext"; 
import "./PopularFood.css";
import { GiHotMeal } from "react-icons/gi";

function PopularFood() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedMeal, setSelectedMeal] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  const { addToCart } = useCart(); // <-- get addToCart function

  const generatePrice = () => {
    const min = 2500;
    const max = 9000;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Beef")
      .then((res) => res.json())
      .then((data) => {
        if (data.meals) {
          const mealsWithPrice = data.meals.map((meal) => ({
            ...meal,
            price: generatePrice(),
          }));
          setMeals(mealsWithPrice);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);


  if (loading) 
    return (
      <div className="loader-container">
        <div className="spinner"></div>
      </div>
    );

  const openModal = (meal) => {
    setSelectedMeal(meal);
    setQuantity(1);
    setTotalPrice(meal.price);
  };

  const closeModal = () => setSelectedMeal(null);

  const increaseQuantity = () => {
    setQuantity((prev) => {
      const newQty = prev + 1;
      setTotalPrice(newQty * selectedMeal.price);
      return newQty;
    });
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => {
      if (prev === 1) return 1;
      const newQty = prev - 1;
      setTotalPrice(newQty * selectedMeal.price);
      return newQty;
    });
  };

  const handleAddToCart = () => {
    const success = addToCart({ 
      ...selectedMeal, 
      quantity,
      price: selectedMeal.price 
    });

    if (success) {
      alert(
        `${selectedMeal.strMeal} x${quantity} added to cart. Total: ₦${totalPrice.toLocaleString()}`
      );
      closeModal();
    } else {
      alert("Please login to add to cart!");
    }
  };

  return (
    <main className="meal-container">
      <div className="best-food">
        <p>
          <GiHotMeal style={{ color: "#23B12C", fontSize: "30px" }} /> BEST FOOD{" "}
          <GiHotMeal style={{ color: "#23B12C", fontSize: "30px" }} />
        </p>
      </div>

      <h1 className="meal-title">
        <span>Popular Food Items</span>
      </h1>

      <section className="meal-grid">
        {meals.map((meal) => (
          <div
            key={meal.idMeal}
            className="meal-cardss"
            onClick={() => openModal(meal)}
          >
            <div className="img-wrapper">
              <img src={meal.strMealThumb} alt={meal.strMeal} />
            </div>
            <div className="meal-detailss">
              <h3 className="meal-strMeal">{meal.strMeal}</h3>
              <div className="meal-price-contect">
                <p className="meal-price">₦{meal.price.toLocaleString()}</p>
                <p className="meal-area">{meal.strArea}</p>
              </div>
              <div className="viewDetailsButton"> view Details</div>
            </div>
          </div>
        ))}
      </section>

      {selectedMeal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <div className="modal-body">
              <img src={selectedMeal.strMealThumb} alt={selectedMeal.strMeal} />
            </div>
            <div className="modal-details">
              <div className="modal-text">
                <h3>{selectedMeal.strMeal}</h3>
                <h3>
                  <strong>Area:</strong> {selectedMeal.strArea}
                </h3>
                <h3>
                  <strong>Category:</strong> {selectedMeal.strCategory}
                </h3>
                <h2>
                  <strong>Instructions:</strong> {selectedMeal.strInstructions}
                </h2>
              </div>

              <div className="quantity-control">
                <button onClick={decreaseQuantity}>-</button>
                <span>{quantity}</span>
                <button onClick={increaseQuantity}>+</button>
              </div>

              <p className="total-price">
                Total: ₦{totalPrice.toLocaleString()}
              </p>

              <button className="add-to-cart" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default PopularFood;


