import axios from "axios";

const BASE_URL = 'https://rickandmortyapi.com/api';

axios.defaults.baseURL = BASE_URL;

export const getAllCharactersAsync = async (page) => {
  try {
    //const data = await axios.get(`/character`);
    const data = await axios.get(`/character/?page=${page}`);
    return data;
  } catch (error) {
    console.log(error);
  }

};

export const getSingleCharacterAsync = async (id) => {
  try {
    const data = await axios.get(`/character/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};