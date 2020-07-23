/* eslint-disable import/no-unresolved */
import { connect } from 'react-redux';
import Profile from 'src/components/Profile';

// === mapStateToProps
const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
  errors: state.auth.errorData,
  successProfile: state.profile.successProfile,
  successAvatar: state.profile.successAvatar,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
