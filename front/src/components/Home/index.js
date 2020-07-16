/* eslint-disable import/no-unresolved */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Loader from 'src/components/Loader';
import quotes from 'src/data/quotes';
import './home.scss';

import people from 'src/assets/images/people-emotions.png';

const Home = ({ isLogged, isLoading }) => {
  // Create a random id between 0 and quotes max length
  const randomId = Math.floor(Math.random() * quotes.length);
  // Select a random quote in the array
  const randomQuote = quotes[randomId];
  // Get the author and the content from the random quote
  const { author, content } = randomQuote;

  return (
    <>
      {isLoading && <Loader />}

      { // Each time the page is refreshed, an API request is made
        // in order to know if user's token exist and if it's valid
        // Once response is received, isLoading becomes false and main content is displayed
        !isLoading && (
        <main className="main">

          <div className="main-img">
            <img src={people} alt="" className="people" />
          </div>

          {
            // Display quote if user is connected
            !isLoading && isLogged && (
              <div className="main-quote">
                <div className="rectangle1" />
                <div className="rectangle2" />
                <blockquote>
                  <p className="quote-content">
                    {content}
                  </p>
                  <cite>{author}</cite>
                </blockquote>
              </div>

            )
          }

          {
            // Display description if user is not connected
          !isLoading && !isLogged && (
            <div className="main-content-container">
              <p className="main-description"><strong>Feel Better</strong> est un générateur de bonnes idées qui vous proposera des activités à faire en fonction de votre humeur.</p>
              <p className="main-description">Inscrivez-vous et profitez !</p>

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
        )
      }
    </>
  );
};

Home.propTypes = {
  isLogged: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Home;
