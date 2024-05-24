import {combineReducers} from 'redux';
import User from './reducers/User';
import {configureStore} from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  user: User,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
