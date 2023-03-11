import { createSlice } from "@reduxjs/toolkit";
import { getCharacters } from "./charactersOperations";

const initialState = {
  filter: '',
  items: [],
  total: 0
};

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCharacters.fulfilled, (state, { payload }) => {
        state.items = [...payload.results];
        state.total = payload.info.pages;
    })
  },
  reducers: {
    filter: (state, { payload }) => {
      return { ...state, filter: payload.toLowerCase() };
    },
  }
})

export const { filter } = charactersSlice.actions;