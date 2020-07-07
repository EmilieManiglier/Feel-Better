import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import Suggestion from './Suggestion';
import './suggestion.scss';

const Suggestions = ({ isLogged }) => {
  if (isLogged === false) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="suggestions-container">
      <h2 className="title">Nous vous proposons les cinq activitées suivantes : </h2>
      <div className="suggestions-activities">
        <Suggestion />
        <Suggestion />
        <Suggestion />
        <Suggestion />
        <Suggestion />
      </div>
    </div>
  );
};

Suggestions.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

export default Suggestions;
