import {
  HANDLE_MOOD_SUBMIT,
  UPDATE_MOOD,
  UPDATE_ESTIMATION,
  SAVE_MOOD,
  LOAD_SUGGESTIONS,
  SET_DATE,
  SHOW_MOOD,
  UPDATE_SUGGESTION,
} from 'src/actions/mood';

const initialState = {
  mood: '',
  estimation: 0,
  setMood: false,
  timestamp: 0,
  // Suggestions
  ideas: [],
  // Display loader while waiting API response
  isLoading: true,
  // Date selected on the calendar
  calendarDate: '',
  showMood: false,
  suggestion: null,
  // Informations related to user's mood
  moodDatas: [
    {
      date: '2020-07-01',
      mood: {
        moodName: 'glad',
        moodIdeas: 'Sauter en parachute',
      },
    },

    {
      date: '2020-07-10',
      mood: {
        moodName: 'angry',
        moodIdeas: 'Ecouter de la musique',
      },
    },

    {
      date: '2020-07-10',
      mood: {
        moodName: 'worried',
        moodIdeas: 'Faire de la patisserie',
      },

    },

    {
      date: '2020-05-23',
      mood: {
        moodName: 'joyful',
        moodIdeas: 'Arts martiaux',
      },
    },

    {
      date: '2020-06-24',
      mood: {
        moodName: 'sad',
        moodIdeas: 'Aller à des meetup',
      },
    },
  ],
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
    case LOAD_SUGGESTIONS:
      return {
        ...state,
        ideas: action.ideas,
        isLoading: false,
      };

    case SET_DATE:
      return {
        ...state,
        calendarDate: action.date,
      };
    case SHOW_MOOD:
      return {
        ...state,
        showMood: true,
      };
    case UPDATE_SUGGESTION:
      return {
        ...state,
        suggestion: action.suggestion,
      };
    default: return state;
  }
};
export default moodReducer;
