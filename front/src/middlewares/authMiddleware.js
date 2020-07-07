/* eslint-disable camelcase */
/* eslint-disable import/no-unresolved */
import axios from 'axios';
import {
  LOG_IN,
  connectUser,
  REGISTER,
} from 'src/actions/authentification';

const authMiddleware = (store) => (next) => (action) => {
  const apiUrl = 'http://34.201.124.197/api/v1';

  switch (action.type) {
    case LOG_IN: {
      // Get user's email and user's password in the state to send to the API
      const { email, password } = store.getState().auth;

      axios.post(`${apiUrl}/login`, {
        email,
        password,
      }, {
        // withCredentials : allow cookie access
        withCredentials: true,
      })
        .then((response) => {
          console.log('response: ', response);
          // Store user'informations received from API response in the state
          store.dispatch(connectUser(response.data.user, response.data.logged));
          // Save the JWT in localStorage
          localStorage.setItem('userToken', response.data.user.token);
        })
        .catch((error) => {
          console.warn(error);
        });

      next(action);
      break;
    }

    case REGISTER: {
      const {
        firstname,
        lastname,
        email,
        password,
        confirm_password,
        city,
        birthday,
        // avatar,
      } = store.getState().auth;

      axios.post(`${apiUrl}/register`, {
        firstname,
        lastname,
        email,
        password,
        confirm_password,
        city,
        birthday,
        // avatar,
      }, {
        // withCredentials : allow cookie access
        withCredentials: true,
      })
        .then((response) => {
          console.log('response: ', response);
          store.dispatch(connectUser(response.data.user, response.data.registered));
        })
        .catch((error) => {
          console.warn(error);
        });

      next(action);
      break;
    }

    default:
      next(action);
  }
};
export default authMiddleware;
