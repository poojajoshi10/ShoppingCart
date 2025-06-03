import React from "react";

const CartItems = ({ cart, updateCartQuantity }) => {
  return (
    <div className="cart-items">
      <h2>Cart Items</h2>
      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <p>Add some products to see them here!</p>
        </div>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <div>
              <h3>{item.name}</h3>
              <p>
                ₹{item.price} x {item.quantity} = ₹{item.price * item.quantity}
              </p>
            </div>
            <div className="controls">
              {!item.isGift && (
                <>
                  <button onClick={() => updateCartQuantity(item.id, -1)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateCartQuantity(item.id, 1)}>
                    +
                  </button>
                </>
              )}
              {item.isGift && <span className="gift-tag">FREE GIFT</span>}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CartItems;
