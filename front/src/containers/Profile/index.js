import { connect } from 'react-redux';
import Profile from 'src/components/Profile';

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
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
