import React from "react";
import "./App.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import bg from "./bg.png";
import UserFunction from "./components/UserContainer.js";

function App() {
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
          <div
            sytle={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <UserFunction />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
