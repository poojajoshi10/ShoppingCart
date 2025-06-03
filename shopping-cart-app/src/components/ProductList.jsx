import React from "react";
import { PRODUCTS } from "../constants/constants";

const ProductList = ({ addToCart }) => {
  return (
    <div className="products-section">
      <h2>Products</h2>
      <div className="products">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <button onClick={() => addToCart(product)} className="add-to-cart">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
