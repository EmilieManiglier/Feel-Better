/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import Loader from 'src/components/Loader';

import Suggestion from 'src/containers/Suggestions/Suggestion';
import './suggestion.scss';

const Suggestions = ({
  isLogged,
  setMood,
  ideas,
  isLoading,
}) => {
  if (isLogged === false) {
    return <Redirect to="/login" />;
  }

  if (!setMood) {
    return (
      <div className="suggestions">Vous n'avez pas encore répondu au <Link to="/mood" className="redirect-mood-link">formulaire d'humeur</Link> !</div>
    );
  }

  if (isLoading) {
    return (
      <Loader />
    );
  }
  if (!isLoading) {
    return (
      <div className="suggestions">
        <h2 className="suggestions-title">Nous vous proposons les cinq activités suivantes : </h2>
        <div className="suggestions-wrapper">
          {ideas.map((idea) => (
            <Suggestion
              key={idea.name}
              {...idea}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="suggestions-container">Vous n'avez pas répondu au formulaire !</div>
  );
};

Suggestions.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  setMood: PropTypes.bool.isRequired,
  ideas: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Suggestions;
