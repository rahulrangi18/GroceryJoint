import React from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/header/Navbar";
import Footer from "./components/footer/Footer";
import ContextProvider from "./context/ContextProvider";
/* import './components/header/style.css' */
const App = () => {
  return (
    <ContextProvider>
      <div className="mainContainer">
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/mainpage" component={MainPage} />
        </Switch>
        <div style={{ width: "100%" }}>
          <Footer />
        </div>
      </div>
    </ContextProvider>
  );
};
export default App;
