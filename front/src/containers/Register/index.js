import { connect } from 'react-redux';
import Register from 'src/components/Register';

import { updateLoginField, submitLogin } from 'src/actions/authentification';

// === mapStateToProps
const mapStateToProps = (state) => ({
  email: state.register.email,
  password: state.register.password,
  firstname: state.register.firstname,
  lastname: state.register.lastname,
  confirm_password: state.register.confirm_password,
  city: state.register.city,
  birthday: state.register.birthday,
  avatar: state.register.avatar,
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
