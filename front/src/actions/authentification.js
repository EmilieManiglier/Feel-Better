export const UPDATE_LOGIN_FIELD = 'UPDATE_LOGIN_FIELD';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const CHECK_LOGGED = 'CHECK_LOGGED';

export const updateLoginField = (identifier, newValue) => ({
  type: UPDATE_LOGIN_FIELD,
  identifier,
  newValue,
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

// === Middleware actions
export const LOG_IN = 'LOG_IN';
export const CONNECT_USER = 'CONNECT_USER';
export const REGISTER = 'REGISTER';

export const logIn = () => ({
  type: LOG_IN,
});

export const connectUser = (data, isLogged) => ({
  type: CONNECT_USER,
  data,
  isLogged,
});

export const register = () => ({
  type: REGISTER,
});

export const checkLogged = () => ({
  type: CHECK_LOGGED,
});
