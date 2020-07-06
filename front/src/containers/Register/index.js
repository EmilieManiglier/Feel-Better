import { connect } from 'react-redux';
import Register from 'src/components/Register';

import { updateLoginField, submitLogin } from 'src/actions/authentification';

// === mapStateToProps
const mapStateToProps = (state) => ({
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
  submitLogin: () => {
    dispatch(submitLogin());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
