import { connect } from 'react-redux';
import Profile from 'src/components/Profile';

import {
  updateProfileField,
  submitProfile,
  updateAvatarMood,
  updateAvatarType,
  updateAvatarColor,
  submitAvatar,
} from 'src/actions/authentification';

// === mapStateToProps
const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
  firstname: state.auth.data.firstname,
  lastname: state.auth.data.lastname,
  email: state.auth.data.email,
  city: state.auth.data.city,
  birthday: state.auth.data.birthday,
  avatar: state.auth.data.avatar,
  avatarType: state.auth.avatarType,
  avatarMood: state.auth.avatarMood,
  avatarColor: state.auth.avatarColor,
  errors: state.auth.errorData,
  successProfile: state.auth.successProfile,
  successAvatar: state.auth.successAvatar,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  // Update email and password informations in the state when the user writes in the input
  updateField: (identifier, newValue) => {
    dispatch(updateProfileField(identifier, newValue));
  },

  // Update user's avatar mood
  updateAvatarMood: (mood) => {
    dispatch(updateAvatarMood(mood));
  },

  // Update user's avatar type
  updateAvatarType: (type) => {
    dispatch(updateAvatarType(type));
  },

  // Update user's avatar color
  updateAvatarColor: (color) => {
    dispatch(updateAvatarColor(color));
  },

  handleAvatarSubmit: () => {
    dispatch(submitAvatar());
  },

  handleSubmit: () => {
    dispatch(submitProfile());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
