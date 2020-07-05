// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Local import
import Header from 'src/components/Header';
import Home from 'src/components/Home';
import Profile from 'src/components/Profile';
import Footer from 'src/components/Footer';
import Page404 from 'src/components/Page404';
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/profile">
        <Profile />
      </Route>

      <Route>
        <Page404 />
      </Route>
    </Switch>

    <Footer />
  </div>
);

// == Export
export default App;
