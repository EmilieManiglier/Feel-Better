/* eslint-disable camelcase */
/* eslint-disable import/no-unresolved */
import axios from 'axios';
import {
  LOG_IN,
  connectUser,
  REGISTER,
  CHECK_LOGGED,
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
          console.log('response for login: ', response);
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
          console.log('response for register: ', response);
          store.dispatch(connectUser(response.data.user, response.data.registered));
        })
        .catch((error) => {
          console.warn(error);
        });

      next(action);
      break;
    }

    case CHECK_LOGGED: {
      const token = localStorage.getItem('userToken');

      // Send token store in localStorage
      // If token exist and is valid,
      // user data is send from server and user is connected persistently
      // If not, user data is empty and user is redirect to login page
      axios.post(`${apiUrl}/islogged`, { token }, {
        // withCredentials : allow cookie access
        withCredentials: true,
      })
        .then((response) => {
          // Connects user and store data in the state
          console.log('response for check logged: ', response);
          store.dispatch(connectUser(response.data.user, response.data.logged));
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
