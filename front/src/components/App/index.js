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
import LegalNotices from 'src/components/LegalNotices';
import MoodCalendar from 'src/containers/MoodCalendar';

import Page404 from 'src/components/Page404';

import Login from 'src/containers/Login';
import Register from 'src/containers/Register';
import './styles.scss';

// == Composant
const App = ({ checkLogged, mood }) => {
  useEffect(() => {
    checkLogged();
  }, []);

  let color = '';

  switch (mood) {
    case 'agressive':
      color = '#2E8B57'; // vert
      break;
    case 'angry':
      color = '#6482E3'; // bleu indigo
      break;
    case 'confident':
      color = '#A14B3C'; // orange foncé
      break;
    case 'glad':
      color = '#DB7093'; // rose
      break;
    case 'indecisive':
      color = '#858585'; // gris
      break;
    case 'inLove':
      color = '#D94452'; // rouge
      break;
    case 'joyful':
      color = '#ffc900'; // jaune
      break;
    case 'lack-of-self-confidence':
      color = '#3399ff'; // bleu clair
      break;
    case 'lonely':
      color = '#f7be16'; // jaune
      break;
    case 'pessimistic':
      color = '#ff9933'; // orange
      break;
    case 'relaxed':
      color = '#8A2BE2'; // violet
      break;
    case 'sad':
      color = '#c70039'; // rouge
      break;
    case 'stressed':
      color = '#3797a4'; // bleu pastel
      break;
    case 'worried':
      color = '#2c786c'; // vert
      break;
    default:
      color = '#858585'; // gris
  }

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

          <Route exact path="/calendar">
            <MoodCalendar />
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

          <Route exact path="/legal-notices">
            <LegalNotices />
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
  mood: PropTypes.string.isRequired,
};

// == Export
export default App;
