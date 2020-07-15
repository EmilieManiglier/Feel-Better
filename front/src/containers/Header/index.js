/* eslint-disable import/no-unresolved */
import { connect } from 'react-redux';
import Header from 'src/components/Header';
import { logOut } from 'src/actions/authentification';
import { toggleTheme } from 'src/actions/themes';

// === mapStateToProps
const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(logOut());
  },

  toggleTheme: () => {
    dispatch(toggleTheme());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);