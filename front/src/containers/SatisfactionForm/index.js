import { connect } from 'react-redux';
import SatisfactionForm from 'src/components/SatisfactionForm';
import {
  updatePertinence,
  updateComment,
  updateSatisfaction,
  handleSatisfactionSubmit,
} from 'src/actions/satisfaction';

// === mapStateToProps
const mapStateToProps = (state) => ({
  comment: state.satisfaction.comment,
  answerStatus: state.satisfaction.answerStatus,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  updateSatisfaction: (value) => {
    dispatch(updateSatisfaction(value));
  },

  updateComment: (value) => {
    dispatch(updateComment(value));
  },

  updatePertinence: (value) => {
    dispatch(updatePertinence(value));
  },

  handleSatisfactionSubmit: () => {
    dispatch(handleSatisfactionSubmit());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SatisfactionForm);
