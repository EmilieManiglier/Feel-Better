import React from 'react';

import Suggestion from './Suggestion';
import './suggestion.scss';

const Suggestions = () => (
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

export default Suggestions;
