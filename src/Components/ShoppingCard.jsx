import React from "react";
import "./Shop.scss";
import { AddShoppingCart, FavoriteBorderOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";

export default function ShoppingCard({ img, title, price }) {
  return (
    <div className="shopping-card">
      <img src={img} alt="Cloth" />
      <div className="cloth-details">
        <h5>{title}</h5>
        <p>
          Price - <span className="org-price">Rs. {price}/- </span>
          <span className="discounted-price">
            Rs. {price - (20 / 100) * price}/-
          </span>
          <span className="discount">(20% OFF)</span>
        </p>
      </div>
      <div className="add-to-cart">
        <Button>
          <FavoriteBorderOutlined htmlColor="red" />
        </Button>
        <Button>
          <AddShoppingCart />
        </Button>
      </div>
    </div>
  );
}
