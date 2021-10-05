import React,{useState} from "react";
import {Link} from 'react-router-dom';
import "./style.css";
import logo from '../../images/logo.png'
import cart from "../../images/cart.png";
import Location from "./Location";
import SearchIcon from "@material-ui/icons/Search";
import SearchBar from "./SearchBar";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LoginDialog from '../user/Login'
import SignUpDialog from '../user/SignUp';
import {LoginContext} from '../../context/ContextProvider';
import Profile from '../user/Profile';
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

const useStyles = makeStyles((theme) => ({
  navbar: {
    background: "#F28705",
    display: "flex",
    paddingLeft: "10%",
    height: "65px",
  },
  root: {
    flexGrow: 1,
  },
  toolbar: {
    minHeight: "10px",
  },
  search: {
    margin: "0 7% 0 auto",
    borderRadius: 10,
    backgroundColor: "#fff",
    width: "50%",
    marginLeft: 10,
    display: "flex",
    color: "black",
    margin: 15,
    height: 40,
    boxShadow: "0px 13px 10px -7px rgba(0,0,0,0.1)",
  },
  searchIcon: {
    padding: theme.spacing(2, 2),
    height: "100%",
    position: "relative",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: 5,
  },
  subheader: {
    margin: "0 15% 0 auto",
    display: "flex",
  },
  login: {
    "& > *": {
      marginRight: 15,
      alignItem: "center",
      color: "black",
      textDecoration: "none",
      textTransform: "none",
    },
    "&:hover": {
      background: "#44B749",
    },
  },
  signup: {
    "& > *": {
      marginRight: 15,
      marginLeft: "auto",
      alignItem: "center",
      color: "black",
      textDecoration: "none",
      textTransform: "none",
    },
    "&:hover": {
      background: "#44B749",
    },
  },
  cart: {
    "& > *": {
      marginRight: "auto",
      alignItem: "center",
      color: "black",
      textDecoration: "none",
      textTransform: "none",
    },
    "&:hover": {
      background: "#44B749",
    },
  },
}));
const mystyle = {
  color: "black",
  fontSize: 30,
  fontFamily: "Arial",
};

const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
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
  return (
    <>
      <div>
        <AppBar position='fixed' color="transparent" className={classes.navbar}>
          <Toolbar>
            <Link to="/mainpage">
            <img
              src={logo}
              alt="logo"
              className={classes.logo}
              style={{ width: 100, marginTop: 0 }}
              />
            </Link>
            <Box boxShadow={2} className={classes.search}>
              <div className={classes.searchIcon}>
                <LocationOnIcon />
              </div>
              <InputBase
                placeholder="Location"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                style={{ width: "15%" }}
                inputProps={{ "aria-label": "search" }}
              />
              <h1 style={mystyle}>|</h1>
              <Divider orientation="vertical" flexItem />
              <SearchBar />
            </Box>
            <Box className={classes.subheader}>
              {
                // console.log(account)
                account ? <Profile account={account} setAccount={setAccount}/>:
              <Button className={classes.login} onClick={()=>openLoginDialog()} color="inherit">
                Log in
              </Button>
              }
              {
                account ? <Button onClick={()=>logout()} >LogOut</Button>:
              <Button className={classes.signup} onClick={()=>openSignUpDialog()} color="inherit">
                Sign up
              </Button>
              }

              <Button className={classes.cart} color="inherit">
                <img
                  src={cart}
                  alt="cart"
                  className={classes.cart}
                  style={{
                    width: 40,
                    height: 40,
                    marginTop: 0,
                    marginRight: 1,
                  }}
                />
                Cart
              </Button>
              <LoginDialog open={open} setOpen={setOpen} toggleLogAccount={toggleLogAccount} setAccount={setAccount} />
              <SignUpDialog open={open1} setOpen={setOpen1} toggleSignAccount={toggleSignAccount} />
            </Box>
          </Toolbar>
        </AppBar>
        
      </div>
    </>
  );
};
export default Navbar;