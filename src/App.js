import React,{useState} from "react";
import './App.css';
import "../src/components/Cards.css";
// import {Sdata} from "./components/Sdata";
import FooterPagePro from "../src/components/footer/Footer";
import Products from "../src/components/header/Products";
import Navbar from "./components/header/Navbar";

function App() {
  // const [cartItem, setCartItem] = useState(Sdate)
  return (
    <div className="app">
        <Navbar />
        <Products  />
        <div className="footer">
          {/* <FooterPagePro /> */}

        </div>
    </div>
  );
}

export default App;
