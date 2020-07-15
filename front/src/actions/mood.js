export const HANDLE_MOOD_SUBMIT = 'HANDLE_MOOD_SUBMIT';
export const UPDATE_MOOD = 'UPDATE_MOOD';
export const UPDATE_ESTIMATION = 'UPDATE_ESTIMATION';
export const SAVE_MOOD = 'SAVE_MOOD';
export const SET_DATE = 'SET_DATE';
export const SHOW_MOOD = 'SHOW_MOOD';
export const UPDATE_SUGGESTION = 'UPDATE_SUGGESTION';

// Send user's mood and estimation to the server
export const handleMoodSubmit = () => ({
  type: HANDLE_MOOD_SUBMIT,
});

// Update mood state with user's mood
export const updateMood = (mood) => ({
  type: UPDATE_MOOD,
  mood,
});

// Update estimation state with user's estimation
export const updateEstimation = (estimation) => ({
  type: UPDATE_ESTIMATION,
  estimation,
});

// Save data received from API in the state once mood form is submitted
export const saveMood = (setMood, timestamp) => ({
  type: SAVE_MOOD,
  setMood,
  timestamp,
});

// Update date state with the date selected on the calendar
export const setDate = (date) => ({
  type: SET_DATE,
  date,
});

// Display or hide mood informations on calendar
export const showMood = () => ({
  type: SHOW_MOOD,
});

// Update suggestion state with suggestion chosen by the user
export const updateSuggestion = (suggestion) => ({
  type: UPDATE_SUGGESTION,
  suggestion,
});

// === Middleware actions
export const LOAD_SUGGESTIONS = 'LOAD_SUGGESTIONS';
export const HANDLE_SUGGESTION_SUBMIT = 'HANDLE_SUGGESTION_SUBMIT';

// Request to API in order to get the suggestions according to user's mood
export const loadSuggestions = (ideas) => ({
  type: LOAD_SUGGESTIONS,
  ideas,
});

export const handleSuggestionSubmit = () => ({
  type: HANDLE_SUGGESTION_SUBMIT,
});
