import React from "react";
import "../components/Cards.css";
import Products from "../components/header/Products";
const MainPage= () => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <Products />
        </div>
      </div>
    </>
  );
};

export default MainPage;
