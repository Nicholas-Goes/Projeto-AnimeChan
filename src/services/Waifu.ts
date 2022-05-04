import rateLimiter from "axios-rate-limit";
import axios from "axios";

const BASE_URL = 'https://api.waifu.im'

const Waifu = rateLimiter(axios.create({
    baseURL: BASE_URL
}), {maxRequests: 1, perMilliseconds: 200, maxRPS: 5})

export default Waifu;