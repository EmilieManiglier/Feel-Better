/* eslint-disable import/no-unresolved */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Loader from 'src/components/Loader';
import './home.scss';

import people from 'src/assets/images/people-emotions.png';

const Home = ({ isLogged, isLoading }) => (
  <>
    {isLoading && <Loader />}

    {!isLoading && (
      <main className="main">

        <div className="main-img">
          <img src={people} alt="" className="people" />
        </div>

        {
          !isLoading && isLogged && (
            <div className="main-quote">
              <span>
                « Être heureuse, c’est cultiver notre part de lumière, et accueillir notre part d’ombre. »
              </span>
            </div>
          )
        }

        {
        !isLoading && !isLogged && (
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
        )
        }

      </main>
    )}
  </>
);

Home.propTypes = {
  isLogged: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Home;
