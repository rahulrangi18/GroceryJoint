import React from "react";
import "../pages/HomeStyle.css";
import SearchBox from "../components/header/SearchBox"
const HomePage = () => {
  return (
    <>
      <div className="HomePage">
        <div className="startingImg">
          <div className="mainHeading">
            <p style={{ fontSize: "68px" }}>GroceryJoint</p>
            <p style={{ fontSize: "30px" }}>You want it,we got it</p>
            <div>
              <SearchBox />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
