import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../features/auth/stores/authSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  // Add your reducers here
});

export default rootReducer; 