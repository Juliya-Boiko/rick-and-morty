import { createSlice } from "@reduxjs/toolkit";
import { getCharacters } from "./charactersOperations";

const initialState = {
  filter: '',
  items: [],
  total: 0, 
  page: 1
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
      return { ...state, filter: payload.toLowerCase(), page: 1 };
    },
    nextPage: (state) => {
      return { ...state, page: state.page + 1 }
    },
    prevPage: (state) => {
      return { ...state, page: state.page - 1 }
    },
  }
})

export const { filter, nextPage, prevPage } = charactersSlice.actions;