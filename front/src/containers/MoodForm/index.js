import { connect } from 'react-redux';
import MoodForm from 'src/components/MoodForm';
import { handleMoodSubmit, updateMood, updateEstimation } from 'src/actions/mood';

// === mapStateToProps
const mapStateToProps = (state) => ({
  setMood: state.mood.setMood,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  handleMoodSubmit: () => {
    dispatch(handleMoodSubmit());
  },

  updateMood: (mood) => {
    dispatch(updateMood(mood));
  },

  updateEstimation: (estimation) => {
    dispatch(updateEstimation(estimation));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MoodForm);
