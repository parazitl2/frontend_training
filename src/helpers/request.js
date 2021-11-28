import axios from 'axios';
// import { AUTH_TOKEN_KEY } from '../constants/common';

const request = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

// function authInterceptor(config) {
//   const token = localStorage.getItem(AUTH_TOKEN_KEY);
//   if (token && !config.withoutAuthorization) {
//     config.headers.authorization = `JWT ${token}`;
//   }
//   return config;
// }
// 
// request.interceptors.request.use(authInterceptor);

export default request;