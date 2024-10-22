import { LogoDev, Menu, PermIdentity, ShoppingCart } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <nav>
        <div>
          <LogoDev className="logo" />
        </div>
        <ul>
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/shop">SHOP</NavLink>
          </li>
          <li>
            <NavLink to="/about">ABOUT US</NavLink>
          </li>
          <li>
            <NavLink to="/contact">CONTACT US</NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to="/user">
              <PermIdentity />
            </NavLink>
          </li>
          <li>
            <NavLink to="/user/cart">
              <ShoppingCart htmlColor="black" />
            </NavLink>
          </li>
        </ul>
        <Button className="menuIcon">
          <Menu htmlColor="black" sx={{width:"2.5rem",height: "2.5rem"}}/>
        </Button>
      </nav>
    </header>
  );
}
