import "./style.css";

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
    background: "#51A66F",
    // display:"flex",
    paddingLeft: "10%",
  },
  root: {
    flexGrow: 1,
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
    // padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    // paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    // transition: theme.transitions.create('width'),
    // width: '100%',
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
        <Typography variant="h4">GroceryJoint</Typography>
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
