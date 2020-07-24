/* eslint-disable import/no-unresolved */
import {
  UPDATE_LOGIN_FIELD,
  SUBMIT_LOGIN,
  CONNECT_USER,
  LOG_OUT,
  UPDATE_LOADER,
  SAVE_AVATAR,
  CATCH_ERRORS,
} from 'src/actions/authentification';

const initialState = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  confirm_password: '',
  city: '',
  birthday: '',
  avatar: '',
  data: {},
  errorData: [],
  // Determine if user is connected
  isLogged: false,
  // Display loader while doing API request
  isLoading: true,
};

const register = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_LOGIN_FIELD:
      return {
        // Return whole state
        ...state,
        // If action.identfier === email, update the value of email in the state
        // with the info written in the input by the user
        // If action.identifier === password, update the value of password in the state
        [action.identifier]: action.newValue,
      };
    case SAVE_AVATAR:
      return {
        ...state,
        avatar: action.avatar,
      };
    case SUBMIT_LOGIN:
      return {
        ...state,
        // Clear all the input when the form is submitted
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirm_password: '',
        city: '',
        birthday: '',
        avatar: '',
        errorData: [],
      };

    case CONNECT_USER:
      return {
        ...state,
        // Store user'informations received from API response in the state
        data: action.data,
        isLogged: action.isLogged,
        isLoading: false,
        email: '',
        password: '',
        errorData: [],
      };

    case LOG_OUT:
      localStorage.removeItem('userToken');
      localStorage.removeItem('color');
      return {
        ...state,
        isLogged: false,
        errorData: [],
      };

    case UPDATE_LOADER:
      return {
        ...state,
        isLoading: false,
      };
    case CATCH_ERRORS:
      return {
        ...state,
        errorData: action.data,
      };
    default: return state;
  }
};
export default register;
