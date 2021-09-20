import React from "react";
import {Route,Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/header/Navbar";
function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/mainpage" component={MainPage} />
      </Switch>
    </>
  );
}
export default App;
