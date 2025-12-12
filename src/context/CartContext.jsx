
import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";

const CartContext = createContext();

export function CartProvider({ children }) {
  const { user } = useAuth();

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ADD TO CART
  const addToCart = (meal) => {
    if (!user) return false;

    const exists = cart.find((item) => item.idMeal === meal.idMeal);

    if (exists) {
      setCart(
        cart.map((item) =>
          item.idMeal === meal.idMeal
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...meal, quantity: 1, price: meal.price || 1500 }]);
    }

    return true;
  };

  // REMOVE ITEM
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.idMeal !== id));
  };

  // UPDATE QUANTITY
  const updateQuantity = (id, qty) => {
    if (qty <= 0) {
      removeFromCart(id);
    } else {
      setCart(
        cart.map((item) =>
          item.idMeal === id ? { ...item, quantity: qty } : item
        )
      );
    }
  };

  // CLEAR CART
  const clearCart = () => setCart([]);

  // TOTAL ITEMS
  const getTotalItems = () =>
    cart.reduce((sum, item) => sum + item.quantity, 0);

  // TOTAL PRICE
  const getTotalPrice = () =>
    cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems: cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalItems,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);

