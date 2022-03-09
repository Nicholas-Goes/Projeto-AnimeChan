import axios from "axios";

const Waifu = axios.create({
  baseURL: `https://api.waifu.pics`,
});

export default Waifu;