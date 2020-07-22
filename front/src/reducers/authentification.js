/* eslint-disable import/no-unresolved */
import {
  UPDATE_LOGIN_FIELD,
  SUBMIT_LOGIN,
  CONNECT_USER,
  LOG_OUT,
  UPDATE_PROFILE_FIELD,
  UPDATE_LOADER,
  SAVE_AVATAR,
  UPDATE_AVATAR_MOOD,
  UPDATE_AVATAR_TYPE,
  UPDATE_AVATAR_COLOR,
  CATCH_ERRORS,
  SUBMIT_PROFILE,
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
  // Bool that show success notification on profile form
  successProfile: false,
  // Determine if user is connected
  isLogged: false,
  // Display loader while doing API request
  isLoading: true,
  // User's avatar mood
  avatarMood: '',
  // User's avatar type
  avatarType: '',
  // User's avatar color
  avatarColor: '',
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

    case UPDATE_PROFILE_FIELD:
      return {
        ...state,
        [action.identifier]: action.newValue,
      };
    case UPDATE_AVATAR_MOOD:
      return {
        ...state,
        avatarMood: action.mood,
      };
    case UPDATE_AVATAR_TYPE:
      return {
        ...state,
        avatarType: action.avatar,
      };
    case UPDATE_AVATAR_COLOR:
      return {
        ...state,
        avatarColor: action.color,
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
    case SUBMIT_PROFILE:
      return {
        ...state,
        errorData: [],
        password: '',
        successProfile: true,
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
