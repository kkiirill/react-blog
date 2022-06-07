import axios from 'axious';

const BASE_URL = 'https://bloggy-api.herokuapp.com';

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
})