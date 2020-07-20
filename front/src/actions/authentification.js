export const UPDATE_LOGIN_FIELD = 'UPDATE_LOGIN_FIELD';
export const SAVE_AVATAR = 'SAVE_AVATAR';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const CHECK_LOGGED = 'CHECK_LOGGED';
export const LOG_OUT = 'LOG_OUT';
export const UPDATE_PROFILE_FIELD = 'UPDATE_PROFILE_FIELD';
export const UPDATE_AVATAR_MOOD = 'UPDATE_AVATAR_MOOD';
export const UPDATE_AVATAR_TYPE = 'UPDATE_AVATAR_TYPE';
export const UPDATE_AVATAR_COLOR = 'UPDATE_AVATAR_COLOR';
export const SUBMIT_AVATAR = 'SUBMIT_AVATAR';
export const SUBMIT_PROFILE = 'SUBMIT_PROFILE';

// updates login fields by their identifier
export const updateLoginField = (identifier, newValue) => ({
  type: UPDATE_LOGIN_FIELD,
  identifier,
  newValue,
});

// Saves user avatar in register form
export const saveAvatar = (avatar) => ({
  type: SAVE_AVATAR,
  avatar,
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

export const updateAvatarMood = (mood) => ({
  type: UPDATE_AVATAR_MOOD,
  mood,
});

export const updateAvatarType = (avatar) => ({
  type: UPDATE_AVATAR_TYPE,
  avatar,
});

export const updateAvatarColor = (color) => ({
  type: UPDATE_AVATAR_COLOR,
  color,
});

export const submitAvatar = () => ({
  type: SUBMIT_AVATAR,
});

// handles profile submission
export const submitProfile = () => ({
  type: SUBMIT_PROFILE,
});

// ==== Middleware actions ====
export const LOG_IN = 'LOG_IN';
export const CONNECT_USER = 'CONNECT_USER';
export const REGISTER = 'REGISTER';
export const UPDATE_LOADER = 'UPDATE_LOADER';

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

export const updateLoader = () => ({
  type: UPDATE_LOADER,
});
