import { createSlice } from "@reduxjs/toolkit";

const catSlice = createSlice({
  name: '@@cat',
  initialState: {
    cats: [],
    totalCats: 0,
    perPage: 9,
    currentPage: 1,
    fetching: false,
    error: null
  },
  reducers: {
    fetchCatsRequest: (store) => {
      return {
        ...store,
        fetching: true,
        error: null
      }
    },
    fetchCatsSuccess: (store, { payload }) => {
      return {
        ...store,
        fetching: false,
        error: null,
        cats: payload.cats,
        currentPage: Number(payload.currentPage),
        perPage: Number(payload.perPage),
        totalCats: Number(payload.totalCats)
      }
    },
    fetchCatsError: (store, { payload }) => {
      return {
        ...store,
        fetching: false,
        error: payload.error,
        cats: []
      }
    }
  }
});

export const {
  fetchCatsRequest,
  fetchCatsSuccess,
  fetchCatsError
} = catSlice.actions;

export default catSlice.reducer;