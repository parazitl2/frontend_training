/*
Ключ приложения
Yp8wQxzHLpXyxVy6E6hh1S9gjStDxrR09NCOtnds
Так же, в течении минуты в ваше приложение добавится несколько сгенерированных постов и три пользователя:

Адрес электронной почты: admin@noveogroup.com
Пароль: password
Роль: admin

Адрес электронной почты: first@noveogroup.com
Пароль: password
Роль: user

Адрес электронной почты: second@noveogroup.com
Пароль: password
Роль: user
*/
const NOVEO_API_PREFIX = 'http://rest-api.noveogroup.com/api/v1';

export const LS_AUTH_TOKEN_KEY = 'authToken';

export const API_HEADER_KEY_NAME = 'X-Application-Key';
export const API_HEADER_KEY_VALUE = 'Yp8wQxzHLpXyxVy6E6hh1S9gjStDxrR09NCOtnds';

export const LOGIN_URL = `${NOVEO_API_PREFIX}/login`;
export const FETCH_CURRENT_USER_URL = `${NOVEO_API_PREFIX}/user`;
