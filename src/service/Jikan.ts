import axios, { AxiosRequestConfig } from 'axios';

const Jikan = axios.create({
  baseURL: 'https://api.jikan.moe/v4',
});

const sleepRequest = (milliseconds: number, originalRequest: AxiosRequestConfig<any>) => {
  return new Promise((resolve) => {
      setTimeout(() => resolve(Jikan(originalRequest)), milliseconds);
  });
};

Jikan.interceptors.response.use(response => {
  return response;
}, error => {
  const { config, response: { status }} = error;
  const originalRequest = config;

  if (status === 429) {
      return sleepRequest(4800, originalRequest);
  }
});

export default Jikan;