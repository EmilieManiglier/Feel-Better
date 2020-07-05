// == Import npm
import React from 'react';

// == Local import
import Header from 'src/components/Header';
import Profile from 'src/components/Profile';
import Footer from 'src/components/Footer';
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Profile />
    <Footer />
  </div>
);

// == Export
export default App;
