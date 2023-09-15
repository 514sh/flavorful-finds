import axios from 'axios'

const baseUrl = `${BACKEND_URL}/users`;
const isSecure = window.location.protocol === "https:";
const ipAddress = PUBLIC_IP;
const domain = "flavorfulfinds.xyz"


const deleteCookie =(cookieName) => {
  document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; ${isSecure ? "secure;" : ""} domain=${ipAddress}`;
  document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; ${isSecure ? "secure;" : ""} domain=${domain}`;
}

const login = async (user) => {

  const response = await axios.post(`${baseUrl}/login`, user);
  document.cookie = `authToken=${response.data.token}; max-age=1800; path=/; ${isSecure ? "secure;" : ""} domain=${domain}`;
  document.cookie = `userId=${response.data.user_id}; max-age=1800; path=/; ${isSecure ? "secure;" : ""} domain=${domain}`;

  document.cookie = `authToken=${response.data.token}; max-age=1800; path=/; ${isSecure ? "secure;" : ""} domain=${ipAddress}`;
  document.cookie = `userId=${response.data.user_id}; max-age=1800; path=/; ${isSecure ? "secure;" : ""} domain=${ipAddress}`;
  return response.data;
};

const register = async (user) => {
  const response = await axios.post(`${baseUrl}/register`, user)
  return response.data
}

const services = {login, register, deleteCookie}

export default services