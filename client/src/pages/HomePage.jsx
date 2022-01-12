import React from "react";
import "../pages/HomeStyle.css";
import SearchBox from "../components/header/SearchBox";
import Footer from "../components/footer/Footer";
import Navbar from '../components/header/Navbar';
import logo from '../images/logoCROP.png';
import { fontFamily } from "@mui/system";

const HomePage = () => {
  return (
    <>
      <div className="HomePage">
        {/* <Navbar/> */}
        <div className="startingImg">
          <div className="mainHeading" style={{display: "flex" ,flexDirection: "column",width: "50%",flexWrap: "wrap"}}>
            <div style={{ fontSize: "78px",fontFamily: "'Urbanist', sans-serif" }}>
            <img
                src={logo}
                alt="logo"
                className="logoImg"
                style={{ width: 180, marginTop: 0 }}
              />
            <i>GroceryJoint</i></div>
            <div style={{ fontSize: "30px" ,fontFamily:"'Open Sans', sans-serif"}}>You want it,we got it</div>
            <div>
              <SearchBox />
            </div>
          </div>
        </div>
        <div className="secondPart">
        <a href="mainpage">
        <div className="display">
           <img src="https://thumbs.dreamstime.com/b/smiling-delivery-man-giving-grocery-bag-to-woman-customer-home-online-food-shopping-service-concept-178143651.jpg" 
              alt="Avatar" 
              style={{width:"100%" ,borderRadius: "8% 8% 0 0"}}
            />
              <div className="container">
              <h4>Order Food Online</h4>
                {/* <h4><b>John Doe</b></h4>
                  <p>Architect & Engineer</p> */}
              </div>
            </div>
        </a>
           
           <div className="display">
           <img src={logo} alt="Avatar" style={{width:"100%"}}/>
              <div className="container">
                <h4><b>John Doe</b></h4>
                  <p>Architect & Engineer</p>
              </div>
            </div>
           <div className="display">
           <img src={logo} alt="Avatar" style={{width:"100%"}}/>
              <div className="container">
                <h4><b>John Doe</b></h4>
                  <p>Architect & Engineer</p>
              </div>
            </div>
           <div className="display">
           <img src={logo} alt="Avatar" style={{width:"100%"}}/>
              <div className="container">
                <h4><b>John Doe</b></h4>
                  <p>Architect & Engineer</p>
              </div>
            </div>
        </div>

        {/* <div style={{ width: "100%" }}>
          <Footer />
        </div> */}
      </div>
    </>
  );
};
export default HomePage;
