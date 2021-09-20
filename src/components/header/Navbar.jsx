import "./style.css";
import logo from '../../images/logo.png'
import cart from "../../images/cart.png";
import Location from "./Location";
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
import SearchIcon from "@material-ui/icons/Search";
import SearchBar from "./SearchBar";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const useStyles = makeStyles((theme) => ({
  navbar: {
    background: "#44B749",
    // display:"flex",
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
      marginRight: "auto",
      alignItem: "center",
      color: "black",
      textDecoration: "none",
      textTransform: "none",
    },
    "&:hover": {
      background: "#F28705",
    },
  },
  signup: {
    "& > *": {
      marginRight: "auto",
      marginLeft: "auto",
      alignItem: "center",
      color: "black",
      textDecoration: "none",
      textTransform: "none",
    },
    "&:hover": {
      background: "#F28705",
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
      background: "#F28705",
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
  return (
    // <Box className={classes.navbar} >
    <AppBar color="transparent" className={classes.navbar}>
      <Toolbar>
        <img
          src={logo}
          alt="logo"
          className={classes.logo}
          style={{ width: 100, marginTop: 0 }}
        />
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
          <Button className={classes.login} color="inherit">
            Log in
          </Button>
          <Button className={classes.signup} color="inherit">
            Sign up
          </Button>

          <Button className={classes.cart} color="inherit">
            <img
              src={cart}
              alt="cart"
              className={classes.cart}
              style={{ width: 40,height:40, marginTop: 0,marginRight:1 }}
            />
             Cart
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
    // </Box>
  );
};

export default Navbar;

// <div className="main-nav" >
// <nav className="navbar navbar-expand-lg navbar-light bg-light">
//     <div className="container-fluid ">
//         <div className="nav" >
//             <a className="navbar-brand" href="#">GroceryJoint</a>
//             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <li class="dropdown">
//                     <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>

//                 </li>
//                 <form className="d-flex">
//                     {/* <Location/> */}
//                     <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//                     <button className="btn btn-outline-success" type="submit">Search</button>
//                 </form>
//                 <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
//                     <li className="nav-item">
//                         <a className="nav-link active" aria-current="page" href="#">Log in</a>
//                     </li>
//                     <li className="nav-item">
//                         <a className="nav-link active" aria-current="page" href="#">Sign Up</a>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     </div>
// </nav>
// </div>
