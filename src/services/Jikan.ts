import axios from 'axios';

const Jikan = axios.create({
  baseURL: "https://api.jikan.moe/v4"
});

export default Jikan;