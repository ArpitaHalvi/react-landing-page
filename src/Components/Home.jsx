import React from "react";
import Intro from "./Intro";
import Services from "./Services";
import Footer from "./Footer";
import Category from "./Category";

export default function Home() {
  return (
    <div>
      <Intro />
      <Services />
      <Category />
      <Footer />
    </div>
  );
}
