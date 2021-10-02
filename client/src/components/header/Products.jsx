import React from "react";
import Sdata from "../Sdata";
import Card from "../Cards";
import { makeStyles } from "@material-ui/core";
import FooterPagePro from "../footer/Footer";
const useStyles = makeStyles({
  main: {
    background: "#000",

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
      </div>
    </>
  );
};
export default Products;