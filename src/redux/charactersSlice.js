import { createSlice } from "@reduxjs/toolkit";
import { getAllCharacters } from "./charactersOperations";

const initialState = {
  filter: '',
  items: [],
};

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllCharacters.fulfilled, (state, { payload }) => {
        state.items = [...payload];
      })
  },
  reducers: {
    filter: (state, { payload }) => {
      return { ...state, filter: payload.toLowerCase() };
    },
  }
})

export const { filter } = charactersSlice.actions;