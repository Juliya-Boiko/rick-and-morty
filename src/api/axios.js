import axios from "axios";

const BASE_URL = 'https://rickandmortyapi.com/api';

axios.defaults.baseURL = BASE_URL;

export const getAllCharactersAsync = async () => {
  const data = axios.get(`/character`);
  return data;
};

export const getSingleCharacterAsync = async (id) => {
  const data = axios.get(`/character/${id}`);
  return data;
};