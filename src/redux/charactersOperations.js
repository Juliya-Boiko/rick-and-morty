
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCharactersAsync } from "api/axios";
//import { getAllTasksAsync, addTaskAsync } from "api/tasks";

export const getAllCharacters = createAsyncThunk(
  'characters/get',
  async (page) => {
    try {
      const { data } = await getAllCharactersAsync(page);
      //console.log(data.results);
      return data.results;
    } catch (error) {
      console.log(error);
      //Notify.failure(`${error.response.data.message}`);
    }
  }
);