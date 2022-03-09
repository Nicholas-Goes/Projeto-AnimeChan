import axios from 'axios';
import rateLimiter from 'axios-rate-limit';

const BASE_URL = 'https://api.jikan.moe/v4';

const Jikan = rateLimiter(axios.create({
  baseURL: BASE_URL
}), {maxRequests: 1, perMilliseconds: 1000, maxRPS: 1})

export default Jikan;