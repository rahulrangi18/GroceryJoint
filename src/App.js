import React from "react";
import "../src/components/Cards.css";
import Footer from "../src/components/footer/Footer";
import Products from "../src/components/header/Products";
import Navbar from "./components/header/Navbar";

function App() {
  return (
    <>
        <Navbar />
        <Products />
        <Footer />
    </>
  );
}

export default App;
