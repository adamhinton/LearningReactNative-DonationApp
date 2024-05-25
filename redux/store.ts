import {combineReducers} from 'redux';
import User from './reducers/User';
import {configureStore} from '@reduxjs/toolkit';
import {logger} from 'redux-logger';

const rootReducer = combineReducers({
  user: User,
});

const store = configureStore({
  reducer: rootReducer,
  // middleware: getDefaultMiddleware => {
  //   return getDefaultMiddleware().concat(logger);
  // },
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
