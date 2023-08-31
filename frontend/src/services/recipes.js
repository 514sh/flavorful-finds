import axios from "axios";

const baseUrl = `${BACKEND_URL}/recipes`;

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const searchByIngredients = async ({ keywords, offset }) => {
  const stringKeywords = keywords.join("&keywords=");
  const queryString = `?offset=${offset}&keywords=${stringKeywords}`;
  const response = await axios.get(`${baseUrl}/ingredients${queryString}`);
  return response.data;
};

const searchByTitle = async ({ keywords, offset }) => {
  const stringKeywords = keywords.join("&keywords=");
  const queryString = `?offset=${offset}&keywords=${stringKeywords}`;
  const response = await axios.get(`${baseUrl}/title${queryString}`);
  return response.data;
};

const services = { getAll, searchByIngredients, searchByTitle };

export default services;
