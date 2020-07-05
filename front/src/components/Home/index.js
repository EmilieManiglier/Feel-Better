import React from 'react';

import './home.scss';

import people from 'src/assets/images/people-emotions.png';

const Home = () => (
  <main className="main">

    <div className="main-img">
      <img src={people} alt="" className="people" />
    </div>

    <div className="main-content-container">
      <p className="main-description">Feel Better est un générateur de bonnes idées qui vous proposera des activités à faire en fonction de votre humeur. <br /> Inscrivez-vous et profitez !
      </p>

      <div className="btn-group">
        <button
          type="button"
          className="btn register-btn"
        >
          S'inscrire
        </button>

        <button
          type="button"
          className="btn"
        >
          Se connecter
        </button>
      </div>
    </div>

  </main>
);

export default Home;
