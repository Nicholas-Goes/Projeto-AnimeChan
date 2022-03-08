import axios from "axios";

const Waifu = axios.create({
  baseURL: `https://api.waifu.im`,
});

export default Waifu;