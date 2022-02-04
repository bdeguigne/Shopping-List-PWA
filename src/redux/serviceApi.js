import axios from 'axios';

const url = process.env.REACT_APP_API_URL;

export const fetchIngredients = () => {
  return axios.get(`${url}/ingredients`);
};

export const toto = () => {};
