import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import App from "../src/App";
import { Provider } from 'react-redux';
import store from './redux/store';


ReactDOM.render(
  <Provider store={store} >

    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
