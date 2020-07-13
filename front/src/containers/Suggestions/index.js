import { connect } from 'react-redux';
import Suggestions from 'src/components/Suggestions';

// === mapStateToProps
const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
  setMood: state.mood.setMood,
  ideas: state.mood.ideas,
  isLoading: state.mood.isLoading,
  city: state.auth.data.city,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Suggestions);
