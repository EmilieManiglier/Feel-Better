import React from 'react';

import climbing from 'src/assets/images/activities/climbing.svg';
import './suggestion.scss';

const Suggestion = () => (
  <div className="suggestion-container">
    <div className="picture-activity">
      <img src={climbing} alt="Faire de l'escalade" className="picture" />
    </div>
    <div className="suggestion">
      <h3 className="">Categorie : </h3>
      <p className="name-category">
        Sport
      </p>
      <p className="name-activity">
        Faire de l'escalade
      </p>
    </div>
  </div>
);

export default Suggestion;
