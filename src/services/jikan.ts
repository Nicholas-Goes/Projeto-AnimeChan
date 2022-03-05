import axios from "axios";

const Kitsu = axios.create({
  baseURL: "https://kitsu.io/api/edge"
});

export default Kitsu;