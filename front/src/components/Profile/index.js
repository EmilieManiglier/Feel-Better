/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Redirect } from 'react-router-dom';
import { Cat } from 'react-kawaii';
import PropTypes from 'prop-types';

import './profile.scss';

const Profile = ({ isLogged }) => {
  console.log('isLogged: ', isLogged);
  if (isLogged === false) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="profile">
      <div className="icone-container">
        <div className="profile-icone">
          <Cat size={210} mood="excited" color="#dfe5f0" />

        </div>
        <button
          type="button"
          className="profile-icone-btn"
        >
          Changer ma photo de profil
        </button>
      </div>

      <form className="profile-form">
        <div className="inputs-container">
          <div className="inputBox">
            <input
              type="text"
              name="firstname"
              id="firstname"
              className="profile-input"
              value="Petit"
            />
            <label className="profile-label" htmlFor="firstname">Mon prénom</label>
          </div>

          <div className="inputBox">
            <input
              type="text"
              name="lastname"
              id="lastname"
              className="profile-input"
              value="Chat"
            />
            <label className="profile-label" htmlFor="lastname">Mon nom</label>
          </div>

          <div className="inputBox">
            <input
              type="email"
              name="email"
              id="email"
              className="profile-input"
              value="petit.chat@gmail.com"
            />
            <label className="profile-label" htmlFor="email">Mon adresse email</label>
          </div>

          <div className="inputBox">
            <input
              type="password"
              name="password"
              id="password"
              className="profile-input"
              value="petitchat"
            />
            <label className="profile-label" htmlFor="password">Mon mot de passe</label>
          </div>

          <div className="inputBox">
            <input
              type="text"
              name="city"
              id="city"
              className="profile-input"
              value="Miaou"
            />
            <label className="profile-label" htmlFor="city">Ma ville</label>
          </div>

          <div className="inputBox">
            <input
              type="date"
              name="birthday"
              id="birthday"
              className="profile-input"
              value="1993-05-23"
            />
            <label className="profile-label" htmlFor="birthday">Ma date de naissance</label>
          </div>
        </div>

        <button type="submit" className="profile-submit-btn">Modifier mes informations</button>
      </form>
    </div>
  );
};

Profile.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

export default Profile;
