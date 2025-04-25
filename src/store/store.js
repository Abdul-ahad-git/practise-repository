// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../features/searchSlice.js';

export const store = configureStore({
  reducer: {
    search: searchReducer,
  },
});
