import React from 'react';

import climbing from 'src/assets/images/activities/climbing.svg';
import './suggestion.scss';

const Suggestion = () => (
  <div className="suggestion-container">
    <div className="picture-activity">
      <img src={climbing} alt="Faire de l'escalade" className="" />
    </div>
    <p className="category">
      Catégorie : Sport
    </p>
    <p className="name-activity">
      Faire de l'escalade
    </p>
  </div>
);

export default Suggestion;
