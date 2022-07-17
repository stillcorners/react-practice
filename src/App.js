import React, { createContext, useState } from 'react';
import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import bg from './bg.png';
import data from './data.js';
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom';
import DetailCard from './Routes/Detail.js';
import axios from 'axios';
import CartComponent from './Routes/Cart.js';

export let Context1 = createContext();

function App() {
  let [shoes, setShoes] = useState(data);
  let [stock] = useState([10, 11, 12]);

  return (
    <div className="App">
      <NavbarComponent />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div
                className="main-bg"
                style={{
                  backgroundImage: 'url(' + bg + ')',
                }}
              >
                <button
                  onClick={() => {
                    let NewShoes = [...shoes];
                    NewShoes.sort((a, b) => (a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1));
                    setShoes(NewShoes);
                  }}
                >
                  가나다순
                </button>
              </div>
              <div>
                <div className="container">
                  <div className="row">
                    {shoes.map((a, i) => {
                      return <Card shoes={shoes[i]} i={i + 1} />;
                    })}
                  </div>
                </div>
              </div>
              <button
                onClick={() => {
                  axios
                    .get('https://codingapple1.github.io/shop/data2.json')
                    .then((result) => {
                      console.log(result.data);
                      let copy = [...shoes, ...result.data];
                      setShoes(copy);
                    })
                    .catch(() => {
                      console.log('실패했는데용');
                    });
                }}
              >
                버튼
              </button>
            </>
          }
        />
        <Route
          path="/detail/:id"
          element={
            <Context1.Provider value={{ stock, shoes }}>
              <DetailCard shoes={shoes} />
            </Context1.Provider>
          }
        />

        <Route path="/cart" element={<CartComponent />} />

        <Route path="*" element={<div>여기는 404</div>} />

        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>member</div>} />
          <Route path="location" element={<div>location</div>} />
        </Route>

        <Route path="/event" element={<Event />}>
          <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>} />
          <Route path="two" element={<p>생일기념 쿠폰받기</p>} />
        </Route>
      </Routes>
    </div>
  );
}

function Card(props) {
  let navigate = useNavigate();
  return (
    <div
      className="col-md-4"
      onClick={() => {
        navigate('/detail/' + props.i);
      }}
    >
      <img alt="shoes" src={'http://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'} width="50%"></img>
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

function NavbarComponent(props) {
  let navigate = useNavigate();
  return (
    <Navbar className="NavbarContainer" variant="dark">
      <Container>
        <Navbar.Brand href="#home">shop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link
            onClick={() => {
              navigate('/');
            }}
          >
            home
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              navigate('cart');
            }}
          >
            cart
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              navigate('detail/1');
            }}
          >
            Detail
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
