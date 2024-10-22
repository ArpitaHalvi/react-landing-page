import { Discount, LocalShipping, Recycling } from "@mui/icons-material";
import React from "react";

export default function Services() {
  return (
    <section className="services-section">
      <div className="services-card">
        <h4>Seasonal Sales & Discounts</h4>
        <Discount className="service-icons" />
        <p>
          Shop exclusive seasonal sales and enjoy discounts on thee hottest
          trends and essentials.
        </p>
      </div>
      <div className="services-card">
        <h4>Free Shipping & Easy Returns</h4>
        <LocalShipping className="service-icons" />
        <p>
          Enjoy hassel-free shopping with free shipping on all orderss and easy
          returns/exchanges if something doesn't fit.
        </p>
      </div>
      <div className="services-card">
        <h4>Sustainable Fashion Choices</h4>
        <Recycling className="service-icons" />
        <p>
          Shop eco-friendly, sustainable clothing options with a focus on
          ethical production and materials.
        </p>
      </div>
    </section>
  );
}
