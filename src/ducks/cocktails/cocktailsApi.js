import axios from "axios";

export const fetchCocktailsByFirstLetter = async (letter = 'a') => {
  const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`);
  return response.data;
};

export const fetchCocktailByName = async (name) => {
  const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
  return response.data;
};

export const fetchCocktailById = async (id) => {
  const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
  return response.data;
};

export const fetchRandomCocktail = async () => {
  const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`);
  return response.data;
};
