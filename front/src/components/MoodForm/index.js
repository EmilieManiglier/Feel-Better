/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import moods from 'src/data/moods';

import './moodForm.scss';

const MoodForm = ({
  handleMoodSubmit,
  updateMood,
  updateEstimation,
  setMood,
}) => {
  if (setMood) {
    return <Redirect to="/suggestions" />;
  }

  return (
    <div className="mood">
      <form
        className="mood-form"
        onSubmit={(evt) => {
          evt.preventDefault();
          handleMoodSubmit();
        }}
      >
        <div className="mood-wrapper">
          <div>
            <h2 className="mood-title">Comment te sens-tu aujourd'hui ?</h2>

            <div className="mood-icons">
              {moods.map((mood) => (
                <div
                  className="mood-img"
                  key={mood.name}
                >
                  <label>
                    <input
                      type="radio"
                      name="mood"
                      className="mood-img-input"
                      value={mood.name}
                      onChange={(evt) => {
                        updateMood(evt.currentTarget.value);
                      }}
                    />
                    <span className="mood-tooltip" aria-label={mood.tooltip} />
                    <img src={mood.picture} alt="" className="mood-icon" />
                    <span className="mood-checked" />
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mood-title">Cible le budget que tu veux investir dans ton activité</h2>

            <div className="stars">
              <input
                className="star star-3"
                id="star-3"
                type="radio"
                name="star"
                value="2"
                onChange={(evt) => {
                  updateEstimation(evt.currentTarget.value);
                }}
              />
              <label className="star star-3" htmlFor="star-3">Élevé</label>

              <input
                className="star star-2"
                id="star-2"
                type="radio"
                name="star"
                value="1"
                onChange={(evt) => {
                  updateEstimation(evt.currentTarget.value);
                }}
              />
              <label className="star star-2" htmlFor="star-2">Faible</label>

              <input
                className="star star-1"
                id="star-1"
                type="radio"
                name="star"
                value="0"
                onChange={(evt) => {
                  updateEstimation(evt.currentTarget.value);
                }}
              />
              <label className="star star-1" htmlFor="star-1">Aucun</label>
            </div>
          </div>
        </div>

        <button className="submit-button" type="submit">Envoyer</button>
      </form>
    </div>
  );
};

MoodForm.propTypes = {
  handleMoodSubmit: PropTypes.func.isRequired,
  updateMood: PropTypes.func.isRequired,
  updateEstimation: PropTypes.func.isRequired,
  setMood: PropTypes.bool.isRequired,
};

export default MoodForm;
