import React from "react";
import "../pages/HomeStyle.css";
import MainPage from "../pages/MainPage";
function HomePage() {
  return (
    <>
      <div className="HomePage">
        <div className="startingImg">
          <div className="mainHeading">
            <p style={{ fontSize: "68px" }}>GroceryJoint</p>
            <p style={{ fontSize: "30px" }}>You want it,we got it</p>
            <span>
              <input placeholder="Enter City"></input>
              <button >Search</button>
            </span>
          </div>
        </div>
        {/* <div className="startingImg1"></div> */}
      </div>
    </>
  );
}

export default HomePage;
