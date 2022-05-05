import axios from "axios";
import RateLimiter from "axios-rate-limit";

const BASE_URL = 'https://api.jikan.moe/v4'

const Jikan = RateLimiter(axios.create({
    baseURL: BASE_URL,
}), { maxRequests: 1, perMilliseconds: 1000, maxRPS: 3})

export default Jikan;