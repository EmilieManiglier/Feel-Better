/* eslint-disable import/no-unresolved */
import { connect } from 'react-redux';
import Login from 'src/components/Login';

import { updateLoginField, logIn } from 'src/actions/authentification';

// === mapStateToProps
const mapStateToProps = (state) => ({
  // Send state information to Login component
  email: state.auth.email,
  password: state.auth.password,
  isLogged: state.auth.isLogged,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  // Update email and password informations in the state when the user writes in the input
  updateField: (identifier, newValue) => {
    dispatch(updateLoginField(identifier, newValue));
  },

  // Submit Login Form and connect user
  submitLogin: () => {
    dispatch(logIn());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
