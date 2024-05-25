/* eslint-disable @typescript-eslint/no-unused-vars */
import {combineReducers} from 'redux';
import User from './reducers/User';
import {configureStore} from '@reduxjs/toolkit';
import {logger} from 'redux-logger';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const rootReducer = combineReducers({
  user: User,
});

const configuration = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
};

const persistedReducer = persistReducer(configuration, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  // middleware: getDefaultMiddleware => {
  //   return getDefaultMiddleware().concat(logger);
  // },
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
