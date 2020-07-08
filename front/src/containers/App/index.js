/* eslint-disable import/no-unresolved */
import { connect } from 'react-redux';
import App from 'src/components/App';
import { checkLogged } from 'src/actions/authentification';

// === mapStateToProps
const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
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
