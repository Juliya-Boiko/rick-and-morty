import axios from "axios";

const BASE_URL = 'https://rickandmortyapi.com/api';

axios.defaults.baseURL = BASE_URL;

export const getAllCharactersAsync = async () => {
  try {
    const data = axios.get(`/character`);
    return data;
  } catch (error) {
    console.log(error);
  }

};

export const getSingleCharacterAsync = async (id) => {
  try {
    const data = axios.get(`/character/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};