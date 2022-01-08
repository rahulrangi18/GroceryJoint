import React from "react";
import "../pages/HomeStyle.css";
import SearchBox from "../components/header/SearchBox";
import Footer from "../components/footer/Footer";
import Navbar from '../components/header/Navbar';
// import SellLogin from "../sellPage/SellLogin";

const HomePage = () => {
  return (
    <>
      <div className="HomePage">
        <Navbar/>
        <div className="startingImg">
          <div className="mainHeading">
            <p style={{ fontSize: "68px" }}>GroceryJoint</p>
            <p style={{ fontSize: "30px" }}>You want it,we got it</p>
            <div>
              <SearchBox />
            </div>
          </div>
        </div>
        {/* <SellLogin/> */}
        <div style={{ width: "100%" }}>
          <Footer />
        </div>
      </div>
    </>
  );
};
export default HomePage;
