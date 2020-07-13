import { connect } from 'react-redux';
import MoodCalendar from 'src/components/MoodCalendar';
import { setDate, showMood } from 'src/actions/mood';

// === mapStateToProps
const mapStateToProps = (state) => ({
  moodDatas: state.mood.moodDatas,
  calendarDate: state.mood.calendarDate,
  showMood: state.mood.showMood,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  setDate: (value) => {
    dispatch(setDate(value));
  },

  toggleShowMood: () => {
    dispatch(showMood());
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(MoodCalendar);
