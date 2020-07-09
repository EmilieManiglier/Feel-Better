import React from 'react';
import PropTypes from 'prop-types';

import './suggestion.scss';

const Suggestion = ({
  name,
  picture,
  category,
  estimation,
}) => {
  let newEstimation = '';
  if (estimation === 0) {
    newEstimation = 'Gratuit';
  }
  else if (estimation === 1) {
    newEstimation = 'Peu coûteux';
  }
  else if (estimation === 2) {
    newEstimation = 'Coûteux';
  }

  return (
    <div className="suggestion-container">
      <div className="picture-activity">
        <img src={`/assets/images/activities/${picture}`} alt="" className="picture" />
      </div>
      <div className="suggestion">
        <h3>{name}</h3>
        <p>{newEstimation}</p>
        <div className="">
          Categorie :
          {category.map((currentCategory) => (
            <li key={currentCategory}>{currentCategory}</li>
          ))}
        </div>
      </div>
    </div>
  );
};

Suggestion.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  category: PropTypes.array.isRequired,
  estimation: PropTypes.number.isRequired,
};

export default Suggestion;
