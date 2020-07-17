/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import picto1 from 'src/assets/images/satisfaction/picto01.png';
import picto2 from 'src/assets/images/satisfaction/picto02.png';
import picto3 from 'src/assets/images/satisfaction/picto03.png';
import picto4 from 'src/assets/images/satisfaction/picto04.png';
import picto5 from 'src/assets/images/satisfaction/picto05.png';

import './satisfactionForm.scss';

const SatisfactionForm = ({
  comment,
  updateSatisfaction,
  updateComment,
  updatePertinence,
  handleSatisfactionSubmit,
}) => (
  <div className="satisfaction">
    <h2 className="satisfaction-title">Voilà cinq activités que l'on s'est rencontré, peux-tu nous donner ton avis ? </h2>
    <form
      className="satisfaction-form"
      onSubmit={(evt) => {
        evt.preventDefault();
        handleSatisfactionSubmit();
      }}
    >
      <p className="question"> Qu'as-tu pensé de tes activités ?</p>
      <label htmlFor="satisfaction1">
        <input
          type="radio"
          className="satisfaction-input"
          id="satisfaction1"
          value="1"
          name="satisfaction"
          required
          onChange={(evt) => {
            updateSatisfaction(evt.currentTarget.value);
          }}
        />
        <img src={picto1} alt="" className="satisfaction-img" />
      </label>

      <label htmlFor="satisfaction2">
        <input
          type="radio"
          className="satisfaction-input"
          id="satisfaction2"
          value="2"
          name="satisfaction"
          required
          onChange={(evt) => {
            updateSatisfaction(evt.currentTarget.value);
          }}
        />
        <img src={picto2} alt="" className="satisfaction-img" />
      </label>

      <label htmlFor="satisfaction3">
        <input
          type="radio"
          className="satisfaction-input"
          id="satisfaction3"
          value="3"
          name="satisfaction"
          required
          onChange={(evt) => {
            updateSatisfaction(evt.currentTarget.value);
          }}
        />
        <img src={picto3} alt="" className="satisfaction-img" />
      </label>

      <label htmlFor="satisfaction4">
        <input
          type="radio"
          className="satisfaction-input"
          id="satisfaction4"
          value="4"
          name="satisfaction"
          required
          onChange={(evt) => {
            updateSatisfaction(evt.currentTarget.value);
          }}
        />
        <img src={picto4} alt="" className="satisfaction-img" />
      </label>

      <label htmlFor="satisfaction5">
        <input
          type="radio"
          className="satisfaction-input"
          id="satisfaction5"
          value="5"
          name="satisfaction"
          required
          onChange={(evt) => {
            updateSatisfaction(evt.currentTarget.value);
          }}
        />
        <img src={picto5} alt="" className="satisfaction-img" />
      </label>

      <label htmlFor="comment" className="satisfaction-comment">
        <p className="question">Un petit commentaire ?</p>
        <textarea
          name=""
          id="comment"
          className=""
          placeholder="Si tu ne sais pas quoi écrire, on te propose de commencer avec : 'J'adore Feel Better...' "
          value={comment}
          onChange={(evt) => {
            updateComment(evt.currentTarget.value);
          }}
        />
      </label>

      <div className="">
        <p className="question">As-tu trouvé que les activités que l'on t'a proposé étaient pertinentes ?</p>
        <label htmlFor="pertinence-1">
          <input
            type="radio"
            name="pertinence"
            className=""
            id="pertinence-1"
            value="1"
            onChange={(evt) => {
              updatePertinence(evt.currentTarget.value);
            }}
          />
          Oui
        </label>

        <label htmlFor="pertinence-0">
          <input
            type="radio"
            name="pertinence"
            className=""
            id="pertinence-0"
            value="0"
            onChange={(evt) => {
              updatePertinence(evt.currentTarget.value);
            }}
          />
          Non
        </label>
      </div>

      <button
        type="submit"
        className="satisfaction-btn-validate"
      >
        Valider
      </button>
    </form>
  </div>
);

SatisfactionForm.propTypes = {
  comment: PropTypes.string.isRequired,
  updateComment: PropTypes.func.isRequired,
  updatePertinence: PropTypes.func.isRequired,
  updateSatisfaction: PropTypes.func.isRequired,
  handleSatisfactionSubmit: PropTypes.func.isRequired,
};

export default SatisfactionForm;
