import React from "react";
import Sdata from "../Sdata";
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
const Products = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.main}>
        {Sdata.map((val) => (
          <Card
            title={val.title}
            imgsrc={val.imgsrc}
            sname={val.sname}
            link={val.link}
          />
        ))}
        {/* <Card/> */}
      </div>
    </>
  );
};
export default Products;