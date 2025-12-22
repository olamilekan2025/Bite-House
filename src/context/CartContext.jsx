import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";

const CartContext = createContext();

export function CartProvider({ children }) {
  const { user } = useAuth();

  const cartKey = user ? `cart_${user.id}` : "guest_cart";

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem(cartKey);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(cartKey, JSON.stringify(cart));
  }, [cart, cartKey]);

  // Merge guest cart after login
  useEffect(() => {
    if (user) {
      const guestCart = JSON.parse(localStorage.getItem("guest_cart")) || [];
      if (guestCart.length > 0) {
        setCart(prev => mergeCarts(prev, guestCart));
        localStorage.removeItem("guest_cart");
      }
    }
  }, [user]);

  const addToCart = (item) => {
    setCart(prev => {
      const exist = prev.find(i => i.idMeal === item.idMeal);
      if (exist) {
        return prev.map(i =>
          i.idMeal === item.idMeal
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      }
      return [...prev, { ...item, quantity: item.quantity || 1, price: item.price || 1500 }];
    });
  };

  const removeFromCart = (id) => setCart(prev => prev.filter(i => i.idMeal !== id));

  const updateQuantity = (id, qty) => {
    if (qty <= 0) removeFromCart(id);
    else setCart(prev => prev.map(i => i.idMeal === id ? { ...i, quantity: qty } : i));
  };

  const clearCart = () => setCart([]);

  const getTotalItems = () => cart.reduce((sum, item) => sum + item.quantity, 0);

  const getTotalPrice = () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

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

const mergeCarts = (userCart, guestCart) => {
  const map = new Map();
  [...userCart, ...guestCart].forEach(item => {
    if (map.has(item.idMeal)) {
      map.set(item.idMeal, {
        ...item,
        quantity: map.get(item.idMeal).quantity + item.quantity,
      });
    } else {
      map.set(item.idMeal, item);
    }
  });
  return Array.from(map.values());
};

export const useCart = () => useContext(CartContext);
