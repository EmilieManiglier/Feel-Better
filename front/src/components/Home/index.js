import React from 'react';

import './home.scss';

import people from 'src/assets/images/home-people.jpg';

const Home = () => (
  <main className="main">
    <img src={people} alt="" className="main-img" />

    <p className="website-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Accusamus minus molestias nulla adipisci tempora repellendus!
    </p>

    <div className="btn-group">
      <button
        className="btn register-btn"
        type="button"
      >
        S'inscrire
      </button>

      <button
        className="btn login-btn"
        type="button"
      >
        Se connecter
      </button>
    </div>
  </main>
);

export default Home;
