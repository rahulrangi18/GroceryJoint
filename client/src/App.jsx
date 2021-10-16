import React from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/header/Navbar";
import Footer from "./components/footer/Footer";
import ContextProvider from "./context/ContextProvider";
import ItemDetails from "./components/card-UI/ItemDetails";
import CartDetails from "./components/card-UI/CartDetails";
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
          {/* <Route exact path="/cart" component={CartDetails} /> */}
        </Switch>
        {/* <div style={{ width: "100%" }}>
          <Footer />
        </div> */}
      </div>
    </ContextProvider>
  );
};
export default App;
