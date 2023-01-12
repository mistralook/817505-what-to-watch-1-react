import axios, { AxiosInstance } from 'axios';

const BACKEND_URL = 'https://10.react.pages.academy/wtw';
const SERVER_TIMEOUT = 5000;

export const configureAxios = (): AxiosInstance => axios.create({
  baseURL: BACKEND_URL,
  timeout: SERVER_TIMEOUT,
});
