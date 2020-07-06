import { connect } from 'react-redux';
import Login from 'src/components/Login';

import { updateLoginField, submitLogin } from 'src/actions/authentification';

// === mapStateToProps
const mapStateToProps = (state) => ({
  email: state.register.email,
  password: state.register.password,
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
