import React, { useState, useEffect } from "react";
import "../pages/HomeStyle.css";
import {Link} from 'react-router-dom';
import SearchBox from "../components/header/SearchBox";
import Products from "../components/header/Products";
import Footer from "../components/footer/Footer";
import Navbar from '../components/header/Navbar';
import logo from '../images/logoCROP.png';
import { fontFamily } from "@mui/system";
import { useSelector, useDispatch } from 'react-redux';
import { getProducts as listProducts } from '../redux/actions/productAction';
import SellLogin from "../sellPage/SellLogin";
import LoginDialog from "../components/user/Login";
import SignUpDialog from "../components/user/SignUp";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  makeStyles,
  Box,
  alpha,
  Button,
  Divider,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  login: {
    "& > *": {
      color: "white",
      marginLeft: "25px",
      fontSize: "20px",
      textTransform:"none",
    },
    "&:hover": {
      color:"black",
    },
  },
  signup: {
    "& > *": {
      color: "white",
      marginLeft: "25px",
      fontSize: "20px",
      textTransform:"none",
    },
    "&:hover": {
      
    },
  },
  store: {
    "& > *": {
      color: "white",
      marginLeft: "25px",
      fontSize: "20px",
      textTransform:"none",
    },
    "&:hover": {
      
    },
  },
}))

const HomePage = () => {

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [account, setAccount] = useState('');
  const openLoginDialog = () => {
    setOpen(true);
    setOpen1(false);
  }

  const toggleLogAccount = () => {
    setOpen1(true);
    setOpen(false);
  }
  const toggleSignAccount = () => {
    setOpen(true);
    setOpen1(false);
  }

  const openSignUpDialog = () => {
    setOpen1(true);
    setOpen(false);
    // console.log("btn clicked")
  }
  const logout = () => {
    setAccount('')
  }

  const openCartDialog = () => {
    // setOpen(true);
    setOpen2(true);
  }

 

  const { products } = useSelector(state => state.getProducts)
  console.log(products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <>
      <div className="HomePage">
        {/* <Navbar/> */}
        <div className="startingImg">
          <div className="container">
            <div className="topnav">
              <Link to='/seller' target='_blank'
                style={{color: "white",
                marginLeft: "25px",
                fontSize: "20px",
                textTransform:"none",}}
              >
                Add Store
              </Link>
              
              <Button
                // className="textStyle"
                className={classes.login}
                onClick={() => openLoginDialog()}
                color="inherit"
              >
                Login
              </Button>
              <Button
                // className="textStyle"
                className={classes.signup}
                onClick={() => openSignUpDialog()}
                color="inherit"
              >
                Sign up
              </Button>
              <LoginDialog
                open={open}
                setOpen={setOpen}
                toggleLogAccount={toggleLogAccount}
                setAccount={setAccount}
              />
              <SignUpDialog
                open={open1}
                setOpen={setOpen1}
                toggleSignAccount={toggleSignAccount}
              />
            </div>
          </div>
          <div
            className="mainHeading"
            style={{
              display: "flex",
              flexDirection: "column",
              width: "50%",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{ fontSize: "78px", fontFamily: "'Urbanist', sans-serif" }}
            >
              <img
                src={logo}
                alt="logo"
                className="logoImg"
                style={{ width: 180, marginTop: 0 }}
              />
              <i>GroceryJoint</i>
            </div>
            <div
              style={{
                fontSize: "30px",
                fontFamily: "'Open Sans', sans-serif",
              }}
            >
              You want it,we got it.
            </div>
            <div>
              <SearchBox />
            </div>
          </div>
        </div>
        <div className="secondPart">
          <a href="mainpage">
            <div className="display">
              <img
                src="https://thumbs.dreamstime.com/b/smiling-delivery-man-giving-grocery-bag-to-woman-customer-home-online-food-shopping-service-concept-178143651.jpg"
                alt="Avatar"
                style={{ width: "100%", borderRadius: "8% 8% 0 0" }}
              />
              <div className="container">
                <h4>Order Food Online</h4>
                {/* <h4><b>John Doe</b></h4>
                  <p>Architect & Engineer</p> */}
              </div>
            </div>
          </a>

          <a href="mainpage">
            <div className="display">
              <img
                src="https://thumbs.dreamstime.com/b/smiling-delivery-man-giving-grocery-bag-to-woman-customer-home-online-food-shopping-service-concept-178143651.jpg"
                alt="Avatar"
                style={{ width: "100%", borderRadius: "8% 8% 0 0" }}
              />
              <div className="container">
                <h4>Order Food Online</h4>
                {/* <h4><b>John Doe</b></h4>
                  <p>Architect & Engineer</p> */}
              </div>
            </div>
          </a>

          <a href="mainpage">
            <div className="display">
              <img
                src="https://thumbs.dreamstime.com/b/smiling-delivery-man-giving-grocery-bag-to-woman-customer-home-online-food-shopping-service-concept-178143651.jpg"
                alt="Avatar"
                style={{ width: "100%", borderRadius: "8% 8% 0 0" }}
              />
              <div className="container">
                <h4>Order Food Online</h4>
                {/* <h4><b>John Doe</b></h4>
                  <p>Architect & Engineer</p> */}
              </div>
            </div>
          </a>
          <a href="mainpage">
            <div className="display">
              <img
                src="https://thumbs.dreamstime.com/b/smiling-delivery-man-giving-grocery-bag-to-woman-customer-home-online-food-shopping-service-concept-178143651.jpg"
                alt="Avatar"
                style={{ width: "100%", borderRadius: "8% 8% 0 0" }}
              />
              <div className="container">
                <h4>Order Food Online</h4>
                {/* <h4><b>John Doe</b></h4>
                  <p>Architect & Engineer</p> */}
              </div>
            </div>
          </a>
        </div>
        <div className="Recomproducts">
          <Products products={products} />
        </div>

        {/* <div>
          <SellLogin />
        </div> */}

        <div style={{ width: "100%" }}>
          <Footer />
        </div>
      </div>
    </>
  );
};
export default HomePage;
