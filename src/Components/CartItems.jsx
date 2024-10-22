import React from "react";

export default function CartItems() {
  return (
    <section className="cart-section">
      <img src="" alt="Cloth" />
      <div className="cloth-details">
        <h5>Women's Combo pack of four(bottoms, sweater, mug, boots)</h5>
        <p>
          Price - Rs. <span className="org-price">1000/- </span>
          <span className="discounted-price">800/-</span>
          <span className="discount">(20% OFF)</span>
        </p>
      </div>
    </section>
  );
}
