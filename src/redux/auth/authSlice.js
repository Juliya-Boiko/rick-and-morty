import { createSlice } from "@reduxjs/toolkit";
import { authUser } from "./authOperations";

const initialState = {
  displayName: null,
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
        state.displayName = payload.displayName;
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
