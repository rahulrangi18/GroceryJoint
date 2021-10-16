import React from "react";
import "../components/Cards.css";
import Products from "../components/header/Products";
import Footer from "../components/footer/Footer";
import Navbar from '../components/header/Navbar';
const MainPage= () => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Navbar /> 
        <div>
          <Products />
        </div>
        <div style={{ width: "100%" }}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default MainPage;
