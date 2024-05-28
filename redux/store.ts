import {combineReducers} from 'redux';
import User, {UserState} from './reducers/User';
import {configureStore} from '@reduxjs/toolkit';
import {logger} from 'redux-logger';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Categories, {CategoriesState} from './reducers/Categories';
import Donations, {DonationsState} from './reducers/Donations';

export type RootState = {
  user: UserState;
  categories: CategoriesState;
  donations: DonationsState;
};

const rootReducer = combineReducers({
  user: User,
  categories: Categories,
  donations: Donations,
});

const configuration = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
};

const persistedReducer = persistReducer(configuration, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger);
  },
});

export default store;
export const persistor = persistStore(store);
