import React from 'react';
import { Link } from 'react-router-dom';

import './home.scss';

import people from 'src/assets/images/people-emotions.png';

const Home = () => (
  <main className="main">

    <div className="main-img">
      <img src={people} alt="" className="people" />
    </div>

    <div className="main-content-container">
      <p className="main-description"><strong>Feel Better</strong> est un générateur de bonnes idées qui vous proposera des activités à faire en fonction de votre humeur. <br /> Inscrivez-vous et profitez !
      </p>

      <div className="btn-group">
        <Link
          to="/register"
          type="button"
          className="btn register-btn"
        >
          S'inscrire
        </Link>

        <Link
          to="/login"
          type="button"
          className="btn"
        >
          Se connecter
        </Link>
      </div>
    </div>

  </main>
);

export default Home;
