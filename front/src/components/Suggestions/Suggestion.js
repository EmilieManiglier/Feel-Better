import React from 'react';
import PropTypes from 'prop-types';
import { Star } from 'react-feather';

import './suggestion.scss';

const Suggestion = ({
  name,
  picture,
  category,
  estimation,
}) => {
  // Create a label corresponding to the estimation
  let newEstimation = '';

  // Create an array on which we loop to display the corresponding number of stars
  const budgetStar = ['0'];

  if (estimation === 0) {
    newEstimation = 'Gratuit';
  }
  else if (estimation === 1) {
    newEstimation = 'Peu coûteux';
    budgetStar.push('1');
  }
  else if (estimation === 2) {
    newEstimation = 'Coûteux';
    budgetStar.push('1', '2');
  }

  return (
    <div className="suggestion-container">
      <div className="suggestion-picture">
        <img src={`assets/images/activities/${picture}`} alt="" />
      </div>
      <div className="suggestion-budget">
        <p>Budget</p>
        {budgetStar.map((star) => (
          <Star key={star} />
        ))}
        <span className="budget-tooltip" aria-label={newEstimation} />
      </div>

      <div className="suggestion-categories">
        {category.map((currentCategory) => (
          <p
            key={currentCategory}
            className="category-name"
          >
            {currentCategory}
          </p>
        ))}
      </div>

      <div className="suggestion-name">
        <span>{name}</span>
        <button
          type="button"
          className="suggestion-search"
          aria-label="Suggestion search button"
          title="Rechercher près de chez moi"
        />

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
