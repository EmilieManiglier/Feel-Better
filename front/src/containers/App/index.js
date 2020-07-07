import { connect } from 'react-redux';
import App from 'src/components/App';
import { checkToken } from 'src/actions/authentification';

// === mapStateToProps
const mapStateToProps = (state) => ({
  token: state.auth.data.token,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  // Check if token exist in localstorage
  // If yes, update isLogged to true (see in reducer)
  checkToken: () => {
    dispatch(checkToken());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
