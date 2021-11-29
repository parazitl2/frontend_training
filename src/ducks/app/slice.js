import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: '@@app',
  initialState: {
    isInitialized: false,
  },
  reducers: {
    initApp(state) {
      return {
        ...state,
        isInitialized: true
      };
    },
  },
});

export const { initApp } = appSlice.actions;

export default appSlice.reducer;
