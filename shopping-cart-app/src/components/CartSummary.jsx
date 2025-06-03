import React from "react";
import { THRESHOLD } from "../constants/constants";

const CartSummary = ({ subtotal, progress }) => {
  return (
    <div className="cart-summary">
      <h2>Cart Summary</h2>
      <div className="subtotal">
        <span>Subtotal:</span>
        <span>₹{subtotal}</span>
      </div>
      <div className="progress-bar">
        <div style={{ width: `${progress}%` }}></div>
      </div>
      <p>
        {subtotal >= THRESHOLD
          ? "You got a free Wireless Mouse!"
          : `Add ₹${THRESHOLD - subtotal} more to get a FREE Wireless Mouse!`}
      </p>
    </div>
  );
};

export default CartSummary;
