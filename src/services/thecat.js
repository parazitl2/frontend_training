// todo: unused
import request from '../helpers/request';
import {
  API_KEY,
  SEARCH_CATS_URL
} from '../constants/thecatApi';

function authInterceptor(config) {
  if (!config.withoutAuthorization) {
    config.headers['x-api-key'] = API_KEY;
  }
  return config;
}

request.interceptors.request.use(authInterceptor);


export const searchCats = ({
  limit = 10,
  page = 1,
  order = 'DESC'
}) => 
  request.get(`${SEARCH_CATS_URL}?limit=${limit}&page=${page}&order=${order}`);