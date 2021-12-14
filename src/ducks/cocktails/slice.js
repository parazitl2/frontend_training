import { createSlice } from '@reduxjs/toolkit';

const cocktailSlice = createSlice({
  name: '@@cocktails',
  initialState: {
    cocktails: [],
    isLoading: null,
    error: null,
  },
  reducers: {
    cocktailsByLetterRequested: () => {},
    cocktailsByLetterLoading: (state) => ({
      ...state,
      isLoading: true
    }),
    cocktailsByLetterReceived: (state, action) => ({
      ...state,
      isLoading: false,
      cocktails: action.payload
    }),
    cocktailsByLetterFailed (state, action) {
      state.push({
        isLoading: false,
        error: action.payload
      });
    }
  },
});

export const {
  cocktailsByLetterRequested,
  cocktailsByLetterLoading,
  cocktailsByLetterReceived,
  cocktailsByLetterFailed
} = cocktailSlice.actions;

export default cocktailSlice.reducer;
