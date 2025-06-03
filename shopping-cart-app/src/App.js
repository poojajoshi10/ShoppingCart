import React, { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import CartSummary from "./components/CartSummary";
import CartItems from "./components/CartItems";
import { PRODUCTS, FREE_GIFT, THRESHOLD } from "./constants/constants";
import "./App.css";

const App = () => {
  const [cart, setCart] = useState([]);

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  useEffect(() => {
    const subtotal = calculateSubtotal();
    const hasGift = cart.some((item) => item.id === FREE_GIFT.id);
    if (subtotal >= THRESHOLD && !hasGift) {
      setCart([...cart, { ...FREE_GIFT, quantity: 1, isGift: true }]);
    } else if (subtotal < THRESHOLD && hasGift) {
      setCart(cart.filter((item) => item.id !== FREE_GIFT.id));
    }
  }, [cart]);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateCartQuantity = (productId, delta) => {
    setCart(
      cart
        .map((item) => {
          if (item.id === productId) {
            const newQuantity = Math.max(0, item.quantity + delta);
            return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const subtotal = calculateSubtotal();
  const progress = Math.min((subtotal / THRESHOLD) * 100, 100);

  return (
    <div className="container">
      <h1>Shopping Cart</h1>
      <ProductList addToCart={addToCart} />
      <CartSummary subtotal={subtotal} progress={progress} />
      <CartItems cart={cart} updateCartQuantity={updateCartQuantity} />
    </div>
  );
};

export default App;
