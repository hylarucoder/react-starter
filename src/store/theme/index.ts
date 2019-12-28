import { createSlice } from '@reduxjs/toolkit';
import { lightTheme, darkTheme } from '@/themes';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    mode: 'light',
    ...lightTheme
  },
  reducers: {
    switchTheme(state) {
      if (state.mode === 'dark') {
        state.mode = 'light';
        Object.assign(state, lightTheme);
      } else {
        state.mode = 'dark';
        Object.assign(state, darkTheme);
      }
    }
  }
});
export const { switchTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
