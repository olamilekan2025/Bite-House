
import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";

const CartContext = createContext();

export function CartProvider({ children }) {
  const { user } = useAuth();

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

 
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

 
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

 
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.idMeal !== id));
  };

  
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


  const clearCart = () => setCart([]);

 
  const getTotalItems = () =>
    cart.reduce((sum, item) => sum + item.quantity, 0);


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

