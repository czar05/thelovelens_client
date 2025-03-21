import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import middleware from './middleware';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
}); 