import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import Suggestion from 'src/containers/Suggestions/Suggestion';
import './suggestion.scss';

const Suggestions = ({ isLogged, setMood, ideas }) => {
  if (isLogged === false) {
    return <Redirect to="/login" />;
  }

  if (!setMood) {
    return (
      <div>Vous n'avez pas répondu au formulaire !</div>
    );
  }

  return (
    <div className="suggestions-container">
      <h2 className="title">Nous vous proposons les cinq activitées suivantes : </h2>
      <div className="suggestions-activities">
        {ideas.map((idea) => (
          <Suggestion
            key={idea.name}
            {...idea}
          />
        ))}

      </div>
    </div>
  );
};

Suggestions.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  setMood: PropTypes.bool.isRequired,
  ideas: PropTypes.array.isRequired,
};

export default Suggestions;
