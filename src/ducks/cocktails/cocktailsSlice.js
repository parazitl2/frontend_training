import { createSlice } from "@reduxjs/toolkit";

const cocktailsSlice = createSlice({
  name: 'cocktails',
  initialState: {
    isLogged: false,
    user: null,
  },
  reducers: {
    cocktailsRequested(state, action) {
      state.isLoading = true;
    },
    cocktailsReceived(state, action) {
      state.push({
        isLoading: false,
        cocktails: action.payload
      });
    },
    cocktailsFailed(state, payload) {
      state.push({
        isLoading: false,
        error: action.payload
      });
    }
  },
});

export const { cocktailsRequested, cocktailsReceived, cocktailsFailed } = appSlice.actions;

export default appSlice.reducer;
