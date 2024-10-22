import { ShoppingCart } from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";
import woman from "../assets/woman4.jpg";

export default function Intro() {
  return (
    <section className="intro-section">
      <div className="tagline">
        <h1>Elevate your wardrobe, elevate yourself</h1>
        <p>
          Transform your wardrobe with timeless essentials and trend-driven
          styles that empower your confidence.
        </p>
        <NavLink to="/shop">
          <button>
            Shop now
            <ShoppingCart />
          </button>
        </NavLink>
      </div>
      <div className="intro-img">
        <img src={woman} alt="ICONIC IMAGE" />
      </div>
    </section>
  );
}
