import React from "react";
import Bgimage from "../images/bgFirstPage.png";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'

function App() {
  return (
    <div className="App">
    <Container fluid style={{padding: 0}}>
    <Image className="startingImg" src = {Bgimage} alt= "grocery" fluid />
    <h1 className="mainHeading">GroceryJoint</h1>
    </Container>
    </div>
  );
}

export default App;