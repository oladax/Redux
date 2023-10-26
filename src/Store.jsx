// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import Userslice from './Userslice';

const store = configureStore({
  reducer: {
    products: Userslice
  },
});

export default store;
