import React from "react";
import "../../pages/HomeStyle.css";
import SearchBar from "../header/SearchBar";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import {
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
    borderRadius: 20,
    backgroundColor: "#fff",
    width: "100%",
    marginLeft: 10,
    display: "flex",
    color: "black",
    margin: 15,
    height: 50,
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
}));
const mystyle = {
  color: "grey",
  fontSize: 20,
  marginTop: "10px",
  fontFamily: "Arial",
};
const SearchBox = () => {
  const classes = useStyles();
  return (
    <>
      <div>
        <Box boxShadow={2} className={classes.search}>
          <div className={classes.searchIcon}>
            <LocationOnIcon 
              style={{color: "#B3541E"}}
            />
          </div>
          <InputBase
            placeholder="Location"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            style={{ width: "60%" }}
            inputProps={{ "aria-label": "search" }}
          />
          <h1 style={mystyle}>|</h1>
          <Divider orientation="vertical" flexItem />
          <SearchBar />
        </Box>
      </div>
    </>
  );
};
export default SearchBox;
