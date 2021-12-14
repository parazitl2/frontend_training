import axios from 'axios';

import {
  API_HEADER_KEY_NAME,
  API_KEY_VALUE,
  CATS_SORT_DESC,
  DEFAULT_PER_PAGE,
  DEFAULT_START_PAGE,
  SEARCH_CATS_URL
} from '../constants/thecatApi';

const request = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

function authInterceptor (config) {
  if (!config.withoutAuthorization) {
    config.headers[API_HEADER_KEY_NAME] = API_KEY_VALUE;
  }
  return config;
}

request.interceptors.request.use(authInterceptor);

export const fetchCats = ({
  limit = DEFAULT_PER_PAGE,
  page = DEFAULT_START_PAGE,
  order = CATS_SORT_DESC
}) =>
  request.get(SEARCH_CATS_URL, { params: { limit, page, order } });
