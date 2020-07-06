import axios from 'axios';
import { LOG_IN, connectUser } from 'src/actions/authentification';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOG_IN: {
      const { email, password } = store.getState().user;

      axios.post('http://localhost:3001/login', {
        email,
        password,
      }, {
        // withCredentials : autorize cookie access
        withCredentials: true,
      })
        .then((response) => {
          store.dispatch(connectUser(response.data, response.logged));
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
