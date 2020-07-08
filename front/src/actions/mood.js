export const HANDLE_MOOD_SUBMIT = 'HANDLE_MOOD_SUBMIT';
export const UPDATE_MOOD = 'UPDATE_MOOD';
export const UPDATE_ESTIMATION = 'UPDATE_ESTIMATION';
export const SAVE_MOOD = 'SAVE_MOOD';

export const handleMoodSubmit = () => ({
  type: HANDLE_MOOD_SUBMIT,
});

export const updateMood = (mood) => ({
  type: UPDATE_MOOD,
  mood,
});

export const updateEstimation = (estimation) => ({
  type: UPDATE_ESTIMATION,
  estimation,
});

export const saveMood = (setMood, timestamp) => ({
  type: SAVE_MOOD,
  setMood,
  timestamp,
});
