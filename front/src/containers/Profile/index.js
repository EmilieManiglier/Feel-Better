import { connect } from 'react-redux';
import Profile from 'src/components/Profile';

import { updateProfileField, submitProfile } from 'src/actions/authentification';

// === mapStateToProps
const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
  firstname: state.auth.data.firstname,
  lastname: state.auth.data.lastname,
  email: state.auth.data.email,
  city: state.auth.data.city,
  birthday: state.auth.data.birthday,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  // Update email and password informations in the state when the user writes in the input
  updateField: (identifier, newValue) => {
    dispatch(updateProfileField(identifier, newValue));
  },
  handleSubmit: () => {
    dispatch(submitProfile());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
