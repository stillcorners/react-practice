import { configureStore, createSlice } from '@reduxjs/toolkit';

let user = createSlice({
  name: 'user',
  initialState: 'yoon',
  reducers: {
    changeName(state) {
      return 'hee' + state;
    },
  },
});

export let { changeName } = user.actions;

let stock = createSlice({
  name: 'stock',
  initialState: [10, 11, 12],
});

let guestCart = createSlice({
  name: 'guestCart',
  initialState: [
    { id: 0, name: 'White and Black', count: 2 },
    { id: 2, name: 'Grey Yordan', count: 1 },
  ],
});

export default configureStore({
  reducer: { user: user.reducer, stock: stock.reducer, guestCart: guestCart.reducer },
});
