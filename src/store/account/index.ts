import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE } from './initialState';

const accountSlice = createSlice({
  name: 'account',
  initialState: INITIAL_STATE,
  reducers: {
    userLoggedIn(state, action) {
      state.loggedIn = action.payload;
    }
  }
});
export const { userLoggedIn } = accountSlice.actions;
export const accountReducer = accountSlice.reducer;
