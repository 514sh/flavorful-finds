import axios from 'axios'

const baseUrl = `${BACKEND_URL}/user_recipe_mapping`;

function getCookie(cookieName) {
  const cookies = document.cookie.split('; ');
  for (const cookie of cookies) {
    const [name, value] = cookie.split('=');
    if (name === cookieName) {
      return decodeURIComponent(value);
    }
  }
  return null;
}

const addToFavorites = async newObject => {
  const token = getCookie('authToken');
  console.log("my token", token)
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  }
  const response = await axios.post(`${baseUrl}/create`, newObject, config)
  return response.data
}

const getFavorites = async () => {
  const userId = getCookie("userId")
  console.log("my id", userId)
  const response = await axios.get(`${baseUrl}/${userId}`)
  return response.data
}


const services = {addToFavorites, getFavorites, getCookie}

export default services