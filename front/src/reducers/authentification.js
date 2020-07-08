/* eslint-disable import/no-unresolved */
import {
  UPDATE_LOGIN_FIELD,
  SUBMIT_LOGIN,
  CONNECT_USER,
  LOG_OUT,
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
  // Determine if user is connected
  isLogged: false,
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
      };

    case CONNECT_USER:
      return {
        ...state,
        // Store user'informations received from API response in the state
        data: action.data,
        isLogged: action.isLogged,
      };

    case LOG_OUT:
      localStorage.removeItem('userToken');
      return {
        ...state,
        isLogged: false,
      };
    default: return state;
  }
};
export default register;
