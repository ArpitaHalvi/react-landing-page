import React from "react";
import "./Shop.scss";
import ShoppingCard from "./ShoppingCard";
import Clothes from "../../data";
import { ArrowBackIos, ArrowBackOutlined } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

export default function Shop() {
  return (
    <section className="shop-section">
      <section className="fashion-images" title="Photo by Clint(pexels.com)">
        <p className="offer-tag">
          Flat 20% OFF on every collection. buy yours now.
        </p>
      </section>
      <h2 className="categories">Women's wear</h2>
      <section className="category-wear">
        {Clothes[0].map((c) => {
          return <ShoppingCard {...c} key={c.id} />;
        })}
      </section>
      <h2 className="categories">Men's wear</h2>
      <section className="category-wear">
        {Clothes[1].map((c) => {
          return <ShoppingCard {...c} key={c.id} />;
        })}
      </section>
      <h2 className="categories">Kid's wear</h2>
      <section className="category-wear">
        {Clothes[2].map((c) => {
          return <ShoppingCard {...c} key={c.id} />;
        })}
      </section>
      <div className="go-back">
        <NavLink to="/">
          <ArrowBackOutlined />
        </NavLink>
      </div>
    </section>
  );
}
