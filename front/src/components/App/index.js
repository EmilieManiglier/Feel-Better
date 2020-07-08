/* eslint-disable import/no-unresolved */
// == Import npm
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Local import
import Header from 'src/components/Header';
import Home from 'src/containers/Home';
import Profile from 'src/containers/Profile';
import Suggestions from 'src/containers/Suggestions';
import MoodForm from 'src/components/MoodForm';
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

  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
          {/* <MoodForm /> */}
        </Route>

        <Route exact path="/profile">
          <Profile />
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
  );
};

App.propTypes = {
  checkLogged: PropTypes.func.isRequired,
};

// == Export
export default App;
