import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
// import styled from 'styled-components';
import { Context1 } from './../App.js';

function DetailCard(props) {
  let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(true);
  let [input, setInput] = useState('');
  let [num, setNum] = useState('');
  let { id } = useParams();
  let FindProduct = props.shoes.find((x) => x.id == id);
  let [tap, setTap] = useState(0);

  let { stock, shoes } = useContext(Context1);

  useEffect(() => {
    let a = setTimeout(() => {
      setAlert(false);
    }, 2000);

    return () => {
      clearTimeout(a);
    };
  }, []);

  useEffect(() => {
    if (isNaN(num) === true) {
      console.log('숫자만 입력하세용');
    }
  }, [alert, num]);

  return (
    <div className="container">
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        버튼입니다 {count}
      </button>

      <div
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      {alert === true ? <div className="alert alert-warning">2초 이내 구매시 할인ㅋ</div> : null}

      <div className="row">
        <div className="col-md-6">
          <img alt="shoes" src="http://codingapple1.github.io/shop/shoes1.jpg" width="50%"></img>
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{FindProduct.title}</h4>
          <p>{FindProduct.content}</p>
          <p>{FindProduct.price}원</p>
          <button className="btn btn-danger">주문하기</button>
          <input
            onChange={(e) => {
              setNum(e.target.value);
            }}
          />
        </div>
      </div>
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTap(0);
            }}
            eventKey="link0"
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTap(1);
            }}
            eventKey="link1"
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTap(2);
            }}
            eventKey="link2"
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TapContent tap={tap} />
    </div>
  );
}

function TapContent({ tap }) {
  let [fade, setFade] = useState('');
  let { stock, shoes } = useContext(Context1);

  useEffect(() => {
    let a = setTimeout(() => {
      setFade('end');
    }, 10);
    return () => {
      clearTimeout(a);
      setFade('');
    };
  }, [tap]);

  return <div className={'start ' + fade}>{[<div>{stock[0]}</div>, <div>내용1</div>, <div>내용2</div>][tap]}</div>;
}

// let Kawaibtn = styled.button`
//   background: ${props => props.color};
//   color: ${props => (props.color === "blue" ? "white" : "black")};
//   padding: 10px;
// `;

// let Box = styled.div`
//   background: grey;
//   padding: 20px;
// `;

export default DetailCard;
