import { toast } from 'react-toastify';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCharactersAsync } from "api/axios";

export const getCharacters = createAsyncThunk(
  'characters/getByName',
  async (name, page) => {
    try {
      const { data } = await getCharactersAsync(name, page);
      return data;
    } catch (error) {
      toast.warn(`No such character. Enter correct name`);
    }
  }
);