import React from "react";
import "../components/Cards.css";
import Footer from "../components/footer/Footer";
import Products from "../components/header/Products";
import Navbar from "../components/header/Navbar";

function MainPage() {
  return (
    <>
      {/* <Navbar /> */}
      <Products />
      <Footer />
    </>
  );
}

export default MainPage;
