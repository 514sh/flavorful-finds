import axios from 'axios'

const baseUrl = `${BACKEND_URL}/users`;

const login = async (user) => {
  const response = await axios.post(`${baseUrl}/login`, user)
  document.cookie = `authToken=${response.data.token}; max-age=1800; path=/; secure; samesite=None`;
  document.cookie = `userId=${response.data.user_id}; max-age=1800; path=/; secure; samesite=None`;
  return response.data
}

const services = {login}

export default services