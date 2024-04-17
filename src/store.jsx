import { configureStore } from '@reduxjs/toolkit';
import trendingReducer from './features/cart/trendingSlice';

 const store = configureStore({
  reducer: {
    trending: trendingReducer
  },
});

export default store;