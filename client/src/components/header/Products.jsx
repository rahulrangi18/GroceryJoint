import React from "react";
// import Sdata from "../Sdata";
import Card from "../Cards";
import { makeStyles } from "@material-ui/core";
// import FooterPagePro from "../footer/Footer";
// import Card from "../card-UI/CardUi";

const useStyles = makeStyles({
  main: {
    // background: "#000",
    marginTop:"10px",
    padding: "15px",
  },
});
const Products = ({product}) => {
  const classes = useStyles();
  console.log(product)
  return (
    <>
      <div className={classes.main}>
        {product.map(product => (
          <Card
            title={product.title}
            imgsrc={product.imgsrc}
            sname={product.sname}
            link={product.link}
          />
        ))}
        {/* <Card/> */}
      </div>
    </>
  );
};
export default Products;