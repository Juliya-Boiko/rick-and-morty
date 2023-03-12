import { createSlice } from "@reduxjs/toolkit";
import { authUser, registerUser, loginUser } from "./authOperations";

const initialState = {
  uid: null,
  accesToken: null,
  isLogged: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(authUser.fulfilled, (state, { payload }) => {
        state.uid = payload.uid;
        state.accesToken = payload.accessToken;
        state.isLogged = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.uid = payload.uid;
        state.accesToken = payload.accessToken;
        state.isLogged = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.uid = payload.uid;
        state.accesToken = payload.accessToken;
        state.isLogged = true;
      })
  },
  reducers: {
    logoutUser: () => {
      return { ...initialState };
    },
  }
});

export const { logoutUser } = authSlice.actions;
