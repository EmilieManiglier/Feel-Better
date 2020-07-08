/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import Glad from 'src/assets/images/moods/glad.png';
import Joyful from 'src/assets/images/moods/joyful.png';
import Agressive from 'src/assets/images/moods/agressive.png';
import Angry from 'src/assets/images/moods/angry.png';
import Confident from 'src/assets/images/moods/confident.png';
import Inlove from 'src/assets/images/moods/inLove.png';
import LackOfSelfConfidence from 'src/assets/images/moods/lack-of-self-confidence.png';
import Lonely from 'src/assets/images/moods/lonely.png';
import Pessimist from 'src/assets/images/moods/pessimist.png';
import Relaxed from 'src/assets/images/moods/relaxed.png';
import Sad from 'src/assets/images/moods/sad.png';
import Stressed from 'src/assets/images/moods/stressed.png';
import Worried from 'src/assets/images/moods/worried.png';

import './moodForm.scss';

const MoodForm = () => (
  <div className="mood">
    <form className="mood-form">
      <div className="moods">
        <div>
          <h2 className="moods-title">Comment te sens-tu aujourd'hui ?</h2>

          <div className="moods-icons">
            <img src={Glad} alt="" />
            <img src={Joyful} alt="" />
            <img src={Agressive} alt="" />
            <img src={Angry} alt="" />
            <img src={Confident} alt="" />
            <img src={Inlove} alt="" />
            <img src={LackOfSelfConfidence} alt="" />
            <img src={Lonely} alt="" />
            <img src={Pessimist} alt="" />
            <img src={Relaxed} alt="" />
            <img src={Sad} alt="" />
            <img src={Stressed} alt="" />
            <img src={Worried} alt="" />
          </div>
        </div>

        <h2 className="moods-title">Cible le budget que tu veux investir dans ton activité</h2>

        <div className="stars">
          <input
            className="star star-3"
            id="star-3"
            type="radio"
            name="star"
            required
          />
          <label className="star star-3" htmlFor="star-3">Élevé</label>
          <input
            className="star star-2"
            id="star-2"
            type="radio"
            name="star"
          />
          <label className="star star-2" htmlFor="star-2">Faible</label>
          <input
            className="star star-1"
            id="star-1"
            type="radio"
            name="star"
          />
          <label className="star star-1" htmlFor="star-1">Aucun</label>
        </div>
      </div>

      <button className="submit-button" type="submit">Envoyer</button>
    </form>
  </div>
);

export default MoodForm;
