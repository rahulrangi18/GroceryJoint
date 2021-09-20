import React from "react";
import Sdata from "../Sdata";
import Card from "../Cards";
const ncard = (val) => {
  return (
    <Card
      key={val.id}
      title={val.title}
      imgsrc={val.imgsrc}
      sname={val.sname}
      link={val.link}
    />
  );
};
const Products = () => {
  return (
    <>
      {Sdata.map(ncard)}
    </>
  );
};

export default Products;
