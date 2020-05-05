import axios from 'axios';

export const baseURL = 'https://take-home-challenge.firebaseio.com/';

export const AxiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': ' application/json',
  },
});

export const SERVICES = {
  USERS: 'users.json',
  USER: 'users/',
};
