import React from "react";
import women from "../assets/woman1.jpg";
import men from "../assets/man3.jpg";
import kids from "../assets/kid1.jpg";
import { NavLink } from "react-router-dom";

export default function Category() {
  return (
    <section className="category-section">
      <div className="collections">
        <h2>Men's Collection</h2>
        <NavLink to="/shop">
          <img src={men} alt="Men's wear" />
        </NavLink>
      </div>
      <div className="collections">
        <h2>Women's Collection</h2>
        <NavLink to="/shop">
          <img src={women} alt="Women's Wear" />
        </NavLink>
      </div>
      <div className="collections">
        <h2>Kid's Collection</h2>
        <NavLink to="/shop">
          <img src={kids} alt="Kid's Wear" />
        </NavLink>
      </div>
    </section>
  );
}
