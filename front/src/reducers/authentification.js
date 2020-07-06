import { UPDATE_LOGIN_FIELD, SUBMIT_LOGIN, CONNECT_USER } from 'src/actions/authentification';

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
        ...state,
        [action.identifier]: action.newValue,
      };

    case SUBMIT_LOGIN:
      return {
        ...state,
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
        data: action.data,
        isLogged: action.isLogged,
      };

    default: return state;
  }
};
export default register;
