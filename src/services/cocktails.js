import axios from 'axios';

import {
  SEARCH_BY_NAME_URL,
  LIST_BY_FIRST_LETTER_URL,
  GET_COCKTAIL_BY_ID_URL,
  GET_RANDOM_COCKTAIL_URL,
} from '../constants/cocktailApi';

const request = axios.create({
  headers: {
    // 'Content-Type': 'application/json',
    'Content-Type': 'text/plain',
  },
});

export const getCocktailsByFirstLetter = (letter = 'a') =>
  request.get(`${LIST_BY_FIRST_LETTER_URL}${letter}`);

export const getCocktailByName = (name) =>
  request.get(`${SEARCH_BY_NAME_URL}${name}`);

export const getCocktailById = (id) =>
  request.get(`${GET_COCKTAIL_BY_ID_URL}${id}`);

export const getRandomCocktail = () =>
  request.get(GET_RANDOM_COCKTAIL_URL);
