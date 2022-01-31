import React from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/header/Navbar";
import Footer from "./components/footer/Footer";
import ContextProvider from "./context/ContextProvider";
import ItemDetails from "./components/card-UI/ItemDetails";
import ProductsImg from "./components/Products_img"
import CartDetails from "./components/card-UI/CartDetails";
import SellLogin from "./sellPage/SellLogin";
import SellSignup from "./sellPage/SellSignup";

/* import './components/header/style.css' */
const App = () => {
  return (
    <ContextProvider>
      <div className="mainContainer">
        {/* <Navbar /> */}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/mainpage" component={MainPage} />
          <Route exact path="/ItemDetails" component={ItemDetails} />
          <Route exact path="/ProductsImg" component={ProductsImg} />
          <Route exact path="/Seller" component={SellLogin} />
          <Route exact path="/sellerSign" component={SellSignup} />
        </Switch>
      </div>
    </ContextProvider>
  );
};
export default App;
