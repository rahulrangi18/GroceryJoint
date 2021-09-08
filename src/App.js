import React from "react";
import Card from "../src/components/Cards";
import "../src/components/Cards.css";
import Sdata from "../src/components/Sdata";
// import Bgimage from "../images/bgFirstPage.png";
// import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
// import Image from 'react-bootstrap/Image'
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
import Navbar from './components/header/Navbar';
function App() {
  return (
    <>
      <Navbar />
      {Sdata.map(ncard)}
    </>
  );
}

export default App;