import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { themeReducer } from './theme';
import { accountReducer } from './account';

export const rootReducer = combineReducers({
  theme: themeReducer,
  account: accountReducer
});

const store = configureStore({
  reducer: rootReducer
});

export { store };
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
