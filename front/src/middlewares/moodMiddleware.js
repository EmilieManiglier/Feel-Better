/* eslint-disable import/no-unresolved */
import axios from 'axios';
import {
  HANDLE_MOOD_SUBMIT,
  saveMood,
  loadSuggestions,
} from 'src/actions/mood';

const moodMiddleware = (store) => (next) => (action) => {
  const apiUrl = 'http://3.81.107.64/api/v1';

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
        // Send mood and estimation to API
        .then((response) => {
          console.log('response for mood: ', response);
          // Store response received from API in the state
          store.dispatch(saveMood(response.data.setMood, response.data.timestamp));
        })
        // And then we store suggestion's data in the state
        .then(() => {
          axios.post(`${apiUrl}/suggestion`, {
            token,
          }, config)
            .then((response) => {
              console.log('response for suggestions: ', response);
              // Store suggestions received from API response in the state
              store.dispatch(loadSuggestions(response.data.ideas));
            });
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
