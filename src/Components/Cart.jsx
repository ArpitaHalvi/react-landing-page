import { ShoppingCart } from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";

export default function Cart() {
  return (
    <section className="cart-section">
      <div className="empty-cart">
        <h3>Seems Like your cart is empty! </h3>
        <p>
          No problem,
          <NavLink to="/shop">
            SHOP NOW <ShoppingCart />
          </NavLink>
        </p>
      </div>
    </section>
  );
}
