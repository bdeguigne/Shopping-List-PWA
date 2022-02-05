import axios from 'axios';

const url = process.env.REACT_APP_API_URL;

export const fetchIngredients = () => {
  return axios.get(`${url}/ingredients`);
};

export const fetchRecipes = () => {
  return axios.get(`${url}/recipes`);
};

export const addRecipeToDatabase = (recipeObject) => {
  return axios.post(`${url}/recipes/add`, recipeObject);
};

export const storeUserSubscriptionToken = (userId, subscription) => {
  return fetch(`${url}/users/${userId}/token`, {
    credentials: 'omit',
    headers: {
      'content-type': 'application/json;charset=UTF-8',
      'sec-fetch-mode': 'cors',
    },
    body: JSON.stringify(subscription),
    method: 'PUT',
    mode: 'cors',
  });
};

export const createOrLogUserRequest = (email, firstName) => {
  const data = JSON.stringify({
    email,
    firstName,
  });
  const config = {
    method: 'post',
    url: `${url}/users`,
    headers: {
      'Content-Type': 'application/json',
    },
    data,
  };

  return axios(config);
};

export const sendNotificationToAllRequest = (recipeName, recipeId) => {
  const data = JSON.stringify({
    recipeName,
    recipeId,
  });
  const config = {
    method: 'post',
    url: `${url}/notification/sendAll`,
    headers: {
      'Content-Type': 'application/json',
    },
    data,
  };

  return axios(config);
};
