import axios from 'axios';

const Kitsu = axios.create({
  baseURL: 'https://kitsu.io/api/edge',
  timeout: 1000,
})

export default Kitsu;