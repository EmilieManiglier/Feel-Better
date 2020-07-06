import { connect } from 'react-redux';
import Register from 'src/components/Register';

import { updateLoginField, register } from 'src/actions/authentification';

// === mapStateToProps
const mapStateToProps = (state) => ({
  // Send state information to REgister component
  email: state.auth.email,
  password: state.auth.password,
  firstname: state.auth.firstname,
  lastname: state.auth.lastname,
  confirm_password: state.auth.confirm_password,
  city: state.auth.city,
  birthday: state.auth.birthday,
  avatar: state.auth.avatar,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  updateField: (identifier, newValue) => {
    dispatch(updateLoginField(identifier, newValue));
  },
  submitRegister: () => {
    dispatch(register());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
