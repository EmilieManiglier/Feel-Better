export const UPDATE_LOGIN_FIELD = 'UPDATE_LOGIN_FIELD';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';

export const updateLoginField = (identifier, newValue) => ({
  type: UPDATE_LOGIN_FIELD,
  identifier,
  newValue,
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});
