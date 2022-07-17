import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { changeName } from './../Store.js';

function Cart() {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();

  return (
    <div>
      {state.user}의 장바구니
      <Table>
        <thead>
          <tr>
            <th>목록</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.guestCart.map((a, i) => (
            <tr key={i}>
              <td>{state.guestCart[i].id}</td>
              <td>{state.guestCart[i].name}</td>
              <td>{state.guestCart[i].count}</td>
              <td>안됑</td>
              <td>
                <button
                  onClick={() => {
                    dispatch(changeName());
                  }}
                >
                  뿡
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
