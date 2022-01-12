import React from "react";
import ReactDOM from "react-dom";
import { Link, link } from 'react-router-dom';
import {makeStyles,Button} from "@material-ui/core";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const useStyles = makeStyles({
  btncart: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
function Card(props) {
  const classes = useStyles();
  return (
    <>
    <div className="container">
    <Link to="/ItemDetails">
        <div className="cards">
          <div className="card">
            <img src={props.imgsrc} alt="myPic" className="card_img" />
            <div className="card_info">
              <span className="card_category">{props.title}</span>
              <h3 className="card_title">{props.sname}</h3>
              <Button
                className={classes.btncart}
                color="primary"
                variant="contained"
                startIcon={<ShoppingCartIcon />}
              >
                ADD TO CART
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </div>
      
    </>
  );
}

export default Card;
