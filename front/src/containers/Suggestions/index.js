import { connect } from 'react-redux';
import Suggestions from 'src/components/Suggestions';

// === mapStateToProps
const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
  setMood: state.mood.setMood,
  ideas: state.mood.ideas,
  isLoading: state.mood.isLoading,
  suggestionSuccess: state.mood.suggestionSuccess,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Suggestions);
