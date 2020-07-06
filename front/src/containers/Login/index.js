/* eslint-disable import/no-unresolved */
import { connect } from 'react-redux';
import Login from 'src/components/Login';

import { updateLoginField, submitLogin } from 'src/actions/authentification';

// === mapStateToProps
const mapStateToProps = (state) => ({
  email: state.auth.email,
  password: state.auth.password,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  updateField: (identifier, newValue) => {
    dispatch(updateLoginField(identifier, newValue));
  },
  submitLogin: () => {
    dispatch(submitLogin());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
