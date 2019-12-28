import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { themeReducer } from './theme';
import { accountReducer } from './account';

export const rootReducer = combineReducers({
  theme: themeReducer,
  account: accountReducer
});

const index = configureStore({
  reducer: rootReducer
});

export { index };
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof index.dispatch;
