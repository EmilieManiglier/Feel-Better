/* eslint-disable import/no-unresolved */
import axios from 'axios';
import { HANDLE_MOOD_SUBMIT, saveMood } from 'src/actions/mood';

const moodMiddleware = (store) => (next) => (action) => {
  const apiUrl = 'http://18.232.116.23/api/v1';

  switch (action.type) {
    case HANDLE_MOOD_SUBMIT: {
      const { mood, estimation } = store.getState().mood;
      const token = localStorage.getItem('userToken');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      axios.post(`${apiUrl}/setmood`, {
        mood,
        estimation,
        token,
      }, config)
        .then((response) => {
          console.log('response for mood: ', response);
          // Store user'informations received from API response in the state
          store.dispatch(saveMood(response.data.setMood, response.data.timestamp));
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
export default moodMiddleware;
