import {
  HANDLE_MOOD_SUBMIT,
  UPDATE_MOOD,
  UPDATE_ESTIMATION,
  SAVE_MOOD,
} from 'src/actions/mood';

const initialState = {
  mood: '',
  estimation: '',
  setMood: false,
  timestamp: 0,
};

const moodReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case HANDLE_MOOD_SUBMIT:
      return {
        ...state,
      };

    case UPDATE_MOOD:
      return {
        ...state,
        mood: action.mood,
      };

    case UPDATE_ESTIMATION:
      return {
        ...state,
        estimation: action.estimation,
      };
    case SAVE_MOOD:
      return {
        ...state,
        setMood: action.setMood,
        timestamp: action.timestamp,
      };

    default: return state;
  }
};
export default moodReducer;
