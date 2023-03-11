import { toast } from 'react-toastify';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCharactersAsync } from "api/axios";

export const getCharacters = createAsyncThunk(
  'characters/getCharacters',
  async (searchQuery) => {
    try {
      const { data } = await getCharactersAsync(searchQuery);
      return data;
    } catch (error) {
      toast.warn(`No such character. Enter correct name`);
    }
  }
);