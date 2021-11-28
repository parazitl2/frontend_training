const API_PREFIX = 'https://www.thecocktaildb.com/api/json/v1/1';

export const SEARCH_BY_NAME_URL = `${API_PREFIX}/search.php?s=`;
export const LIST_BY_FIRST_LETTER_URL = `${API_PREFIX}/search.php?f=`;
export const SEARCH_INGRIDIENT_BY_NAME_URL = `${API_PREFIX}/search.php?i=`;
export const GET_COCKTAIL_BY_ID_URL = `${API_PREFIX}/lookup.php?i=`;
export const GET_INGRIDIENT_BY_ID_URL = `${API_PREFIX}/lookup.php?iid=`;
export const GET_RANDOM_COCKTAIL_URL = `${API_PREFIX}/random.php`;
