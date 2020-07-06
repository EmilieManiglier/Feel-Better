import { UPDATE_LOGIN_FIELD, SUBMIT_LOGIN } from 'src/actions/authentification';

const initialState = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  confirm_password: '',
  city: '',
  birthday: '',
  avatar: '',
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

    default: return state;
  }
};
export default register;
