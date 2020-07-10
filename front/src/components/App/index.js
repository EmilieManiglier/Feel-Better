/* eslint-disable import/no-unresolved */
// == Import npm
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'src/styles/GlobalStyles';
import useDarkMode from 'src/styles/useDarkMode';
import { lightTheme, darkTheme } from 'src/styles/Theme';

// == Local import
import Header from 'src/containers/Header';
import Home from 'src/containers/Home';
import Profile from 'src/containers/Profile';
import Suggestions from 'src/containers/Suggestions';
import MoodForm from 'src/containers/MoodForm';
import Footer from 'src/components/Footer';
import Team from 'src/components/Team';

import Page404 from 'src/components/Page404';

import Login from 'src/containers/Login';
import Register from 'src/containers/Register';
import './styles.scss';

// == Composant
const App = ({ checkLogged }) => {
  useEffect(() => {
    checkLogged();
  }, []);

  // ===== Dark / Light Theme =====
  // Custom hook which contains the chosen theme and the toggle function to switch between modes
  const [theme, themeToggler] = useDarkMode();
  // Toggle either dark or light theme based on the truth condition
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <div className="app">
        <Header themeToggler={themeToggler} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/profile">
            <Profile />
          </Route>

          <Route exact path="/mood">
            <MoodForm />
          </Route>

          <Route exact path="/team">
            <Team />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/register">
            <Register />
          </Route>

          <Route exact path="/suggestions">
            <Suggestions />
          </Route>

          <Route>
            <Page404 />
          </Route>
        </Switch>

        <Footer />
      </div>
    </ThemeProvider>
  );
};

App.propTypes = {
  checkLogged: PropTypes.func.isRequired,
};

// == Export
export default App;
