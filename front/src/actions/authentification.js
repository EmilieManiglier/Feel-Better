export const UPDATE_LOGIN_FIELD = 'UPDATE_LOGIN_FIELD';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const CHECK_LOGGED = 'CHECK_LOGGED';
export const LOG_OUT = 'LOG_OUT';
export const UPDATE_PROFILE_FIELD = 'UPDATE_PROFILE_FIELD';
export const SUBMIT_PROFILE = 'SUBMIT_PROFILE';

// updates login fields by their identifier
export const updateLoginField = (identifier, newValue) => ({
  type: UPDATE_LOGIN_FIELD,
  identifier,
  newValue,
});

//  updates profile fields
export const updateProfileField = (identifier, newValue) => ({
  type: UPDATE_PROFILE_FIELD,
  identifier,
  newValue,
});

// handles login submission
export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

// handles profile submission
export const submitProfile = () => ({
  type: SUBMIT_PROFILE,
});

// === Middleware actions
export const LOG_IN = 'LOG_IN';
export const CONNECT_USER = 'CONNECT_USER';
export const REGISTER = 'REGISTER';

// logs the user
export const logIn = () => ({
  type: LOG_IN,
});

// store user data in the state + status logged
export const connectUser = (data, isLogged) => ({
  type: CONNECT_USER,
  data,
  isLogged,
});

// creates a new user
export const register = () => ({
  type: REGISTER,
});

// checks if there's already a user token in local storage
export const checkLogged = () => ({
  type: CHECK_LOGGED,
});

// disconnects users
export const logOut = () => ({
  type: LOG_OUT,
});
