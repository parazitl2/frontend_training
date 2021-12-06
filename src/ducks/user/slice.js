import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: '@@user',
  initialState: {
    isAuth: false,
    currentUser: {},
    error: null,
  },
  reducers: {
    userLoginRequest(state) {
      return {
        ...state,
        error: null
      };
    },
    userLoginSuccess(state) {
      return state;
    },
    userLoginError(state) {
      return {
        ...state,
        error: null
      };
    },
    currentUserRequest(state) {
      return {
        ...state,
        error: null
      };
    },
    currentUserReceived(state, action) {
      return {
        ...state,
        isAuth: true,
        currentUser: action.payload,
      };
    },
    currentUserError(state, action) {
      return {
        ...state,
        isAuth: false,
        error: action.payload,
      }
    }
  }
});

export const {
  userLoginRequest,
  userLoginSuccess,
  userLoginError,
  currentUserRequest,
  currentUserReceived,
  currentUserError,
} = userSlice.actions;

export default userSlice.reducer;