import { configureStore } from '@reduxjs/toolkit';
import researchReducer from './slice/research';

export default configureStore({
  reducer: { researchReducer },
});
