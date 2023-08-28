import axios from "axios";

const baseUrl = `${BACKEND_URL}/recipes`;
console.log(baseUrl);

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const services = { getAll };

export default services;
