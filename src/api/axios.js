import axios from "axios";
import { toast } from 'react-toastify';

const BASE_URL = 'https://rickandmortyapi.com/api';

axios.defaults.baseURL = BASE_URL;

export const getCharactersAsync = async (name, page) => {
  try {
    const data = await axios.get(`/character/?name=${name}&page=${page}`);
    return data;
  } catch (error) {
    toast.warn(`${error.response.data.error}`);
    console.log(error.response.data.error);
  }
}

export const getSingleCharacterAsync = async (id) => {
  try {
    const data = await axios.get(`/character/${id}`);
    return data;
  } catch (error) {
    toast.warn(`${error.response.data.error}`);
    console.log(error);
  }
};