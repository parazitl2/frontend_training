import request from '../helpers/request';
import {
  API_HEADER_KEY_NAME,
  API_HEADER_KEY_VALUE,
  LOGIN_URL,
  LS_AUTH_TOKEN_KEY,
} from '../constants/noveoApi';
import { FETCH_CURRENT_USER_URL } from '../constants/noveoApi';

function apiKeyInterceptor(config) {
  config.headers[API_HEADER_KEY_NAME] = API_HEADER_KEY_VALUE;

  return config;
}

function authInterceptor(config) {
  const token = localStorage.getItem(LS_AUTH_TOKEN_KEY);

  if (token && !config.withoutAuthorization) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
}

function responseHandler(response) {
  return Promise.resolve(response.data);
}

function errorHandler({ status, config, data }) {
  debugger;
  if ([401, 403].includes(status) && !config.noRedirect) {
    window.location = LOGIN_URL;
    localStorage.removeItem(LS_AUTH_TOKEN_KEY);
  }

  return Promise.reject({
    message: data,
    status: status,
  });
}

request.interceptors.request.use(apiKeyInterceptor);
request.interceptors.request.use(authInterceptor);
request.interceptors.response.use(responseHandler, errorHandler);


export const loginRequest = (data) => request.post(LOGIN_URL, data);
export const fetchCurrentUserRequest = () => request.get(FETCH_CURRENT_USER_URL);
