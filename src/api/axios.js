import axios from "axios";
import { toast } from 'react-toastify';

const BASE_URL = 'https://rickandmortyapi.com/api';
axios.defaults.baseURL = BASE_URL;

export const getCharactersAsync = async (searchQuery) => {
  console.log('getCharactersAsync incoming searchQuery--->', searchQuery);
  const { filter, page } = searchQuery;
  const data = await axios.get(`/character/?name=${filter}&page=${page}`);
  return data;
}

export const getSingleCharacterAsync = async (id) => {
  try {
    const data = await axios.get(`/character/${id}`);
    return data;
  } catch (error) {
    toast.warn(`${error.response.data.error}`);
  }
};