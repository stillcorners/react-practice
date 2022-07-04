import React, { useState } from "react";
import "./App.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import bg from "./bg.png";
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import DetailCard from "./Routes/Detail";

function App() {
  let [shoes] = useState(data);

  return (
    <div className="App">
      <NavbarComponent />
      <Routes>
        <Route path="/detail" element={<DetailCard />} />
        <Route
          path="/"
          element={
            <>
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
            </>
          }
        />
        <Route path="*" element={<div>여기는 404</div>} />

        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>member</div>} />
          <Route path="location" element={<div>location</div>} />
        </Route>

        <Route path="/event" element={<EventComponent />}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
        </Route>
      </Routes>
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

function About() {
  return (
    <div>
      <h4>기밀정보인데요</h4>
      <Outlet></Outlet>
    </div>
  );
}

function NavbarComponent() {
  let navigate = useNavigate();
  return (
    <Navbar className="NavbarContainer" variant="dark">
      <Container>
        <Navbar.Brand href="#home">hee.nov</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link
            onClick={() => {
              navigate("/");
            }}
          >
            home
          </Nav.Link>
          <Nav.Link href="#features">memo</Nav.Link>
          <Nav.Link
            onClick={() => {
              navigate("/detail");
            }}
          >
            Detail
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

function EventComponent() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
