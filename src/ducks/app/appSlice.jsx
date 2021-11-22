import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: 'app',
  initialState: {
    isLogged: false,
    user: null,
  },
  reducers: {
    logIn(state, action) {
      const { user } = action.payload;
      state.push({
        user,
        isLogged: true,
      });
    },
    logOut(state, action) {
      state.push({
        user: null,
        isLogged: false,
      });
    },
  },
});

export const { logIn, logOut } = appSlice.actions;

export default appSlice.reducer;
