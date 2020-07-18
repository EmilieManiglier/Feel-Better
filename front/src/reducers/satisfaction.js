import {
  SAVE_SATISFACTION,
  UPDATE_SATISFACTION,
  UPDATE_COMMENT,
  UPDATE_PERTINENCE,
  SAVE_STATUS,
} from 'src/actions/satisfaction';

const initialState = {
  // Bool that show satisfaction form or not
  showSatisfactionForm: false,
  // rating of the suggested activities chosen by the user in satisfaction form
  satisfaction: null,
  // User's comment in satisfaction form
  comment: '',
  // pertinence of the suggested activities chosen by the user in satisfaction form
  pertinenceString: null,
  // status received from API response (201 if success)
  answerStatus: false,
};

const satisfactionReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_SATISFACTION:
      return {
        ...state,
        showSatisfactionForm: action.satisfaction,
      };
    case UPDATE_SATISFACTION:
      return {
        ...state,
        satisfaction: action.satisfaction,
      };
    case UPDATE_COMMENT:
      return {
        ...state,
        comment: action.comment,
      };
    case UPDATE_PERTINENCE:
      return {
        ...state,
        pertinenceString: action.pertinence,
      };
    case SAVE_STATUS:
      return {
        ...state,
        anwserStatus: action.status,
        comment: '',
        satisfaction: null,
        pertinenceString: null,
      };
    default: return state;
  }
};
export default satisfactionReducer;
