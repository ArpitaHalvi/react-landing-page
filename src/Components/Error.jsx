import { ArrowBackOutlined } from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";

export default function Error() {
  return (
    <section className="error-page">
      <div className="error">
        <h1>PAGE NOT FOUND</h1>
        <NavLink to="/">
          <ArrowBackOutlined />
          Go Back
        </NavLink>
      </div>
    </section>
  );
}
