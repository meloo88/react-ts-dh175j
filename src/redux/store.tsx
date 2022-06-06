import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import loggerMiddleware from './middlewares/logger';
import menuReducer from './reducers/menuReducer';

const store = configureStore({
  reducer: {
    menuReducer,
  },
  middleware: [loggerMiddleware],
});

console.log(store.getState());

export default store;
