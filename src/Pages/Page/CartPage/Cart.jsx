
import React from "react";
import { useCart } from "../../../context/CartContext";
import { FaTrashAlt } from "react-icons/fa";
import "./Cart.css";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
 


  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <h2>Your Cart is Empty</h2>
        <p>Add some delicious food to your cart!</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.idMeal} className="cart-item">
            <img src={item.strMealThumb || item.image} alt={item.strMeal || item.name} />
            <div className="cart-item-details">
              <h3>{item.strMeal || item.name}</h3>
              <p>${item.price.toFixed(2)}</p>
              <div className="quantity-controls">
                <button
                  onClick={() =>
                    updateQuantity(item.idMeal, item.quantity - 1)
                  }
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.idMeal, item.quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
            <button
              className="remove-btn"
              onClick={() => removeFromCart(item.idMeal)}
            >
              <FaTrashAlt />
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <p>Total: <strong>${totalPrice.toFixed(2)}</strong></p>
        <button className="checkout-btn">Checkout</button>
        <button className="clear-btn" onClick={clearCart}>Clear Cart</button>
      </div>
    </div>
  );
};

export default Cart;

