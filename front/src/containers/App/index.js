import { connect } from 'react-redux';
import App from 'src/components/App';
import { checkLogged } from 'src/actions/authentification';

// === mapStateToProps
const mapStateToProps = (state) => ({
  token: state.auth.data.token,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  // Check if token exist in localstorage
  // If yes, update isLogged to true (see in reducer)
  checkLogged: () => {
    dispatch(checkLogged());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
