import { configureStore } from '@reduxjs/toolkit';
import trendingReducer from './features/media/trendingSlice';
import detailReducer from './features/media/detailSlice';

 const store = configureStore({
  reducer: {
    trending: trendingReducer,
    detail:detailReducer
  },
});

export default store;