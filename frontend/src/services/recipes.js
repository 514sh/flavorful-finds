import axios from "axios";

const baseUrl = `${BACKEND_URL}/recipes`;
console.log(baseUrl);

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const searchByIngredients = async (keywords) => {
  const stringKeywords = keywords.join("&keywords=");
  const queryString = `?keywords=${stringKeywords}`;
  const response = await axios.get(`${baseUrl}/ingredients${queryString}`);
  console.log(response);
  return response.data;
};

const services = { getAll, searchByIngredients };

export default services;
