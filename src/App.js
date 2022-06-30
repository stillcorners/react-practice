import React, { useState } from "react";
import "./App.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import bg from "./bg.png";
import data from "./data.js";

function App() {
  let [shoes] = useState(data);
  return (
    <div className="App">
      <Navbar className="NavbarContainer" variant="dark">
        <Container>
          <Navbar.Brand href="#home">hee.nov</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">blog</Nav.Link>
            <Nav.Link href="#features">memo</Nav.Link>
            <Nav.Link href="#pricing">photo</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div
        className="main-bg"
        style={{ backgroundImage: "url(" + bg + ")" }}
      ></div>

      <div>
        <div className="container">
          <div className="row">
            {shoes.map(shoes => {
              return <Card shoes={shoes} key={shoes.id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img alt="shoes" src={props.shoes.img} width="50%"></img>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  );
}

export default App;
