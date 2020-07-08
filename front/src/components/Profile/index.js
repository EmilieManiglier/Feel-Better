/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Redirect } from 'react-router-dom';
import { Cat } from 'react-kawaii';
import PropTypes from 'prop-types';

import './profile.scss';

const Profile = ({
  isLogged,
  firstname,
  lastname,
  email,
  city,
  birthday,
  updateField,
  handleSubmit,
}) => {
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

      <form
        className="profile-form"
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
      >
        <div className="inputs-container">
          <div className="inputBox">
            <input
              type="text"
              name="firstname"
              id="firstname"
              className="profile-input"
              placeholder={firstname}
              onChange={(event) => {
                updateField(event.currentTarget.name, event.currentTarget.value);
              }}
            />
            <label className="profile-label" htmlFor="firstname">Mon prénom</label>
          </div>

          <div className="inputBox">
            <input
              type="text"
              name="lastname"
              id="lastname"
              className="profile-input"
              placeholder={lastname}
              onChange={(event) => {
                updateField(event.currentTarget.name, event.currentTarget.value);
              }}
            />
            <label className="profile-label" htmlFor="lastname">Mon nom</label>
          </div>

          <div className="inputBox">
            <input
              type="email"
              name="email"
              id="email"
              className="profile-input"
              placeholder={email}
              onChange={(event) => {
                updateField(event.currentTarget.name, event.currentTarget.value);
              }}
            />
            <label className="profile-label" htmlFor="email">Mon adresse email</label>
          </div>

          <div className="inputBox">
            <input
              type="password"
              name="password"
              id="password"
              className="profile-input"
              required
              onChange={(event) => {
                updateField(event.currentTarget.name, event.currentTarget.value);
              }}
            />
            <label className="profile-label" htmlFor="password">Mon mot de passe</label>
          </div>

          <div className="inputBox">
            <input
              type="text"
              name="city"
              id="city"
              className="profile-input"
              placeholder={city}
              onChange={(event) => {
                updateField(event.currentTarget.name, event.currentTarget.value);
              }}
            />
            <label className="profile-label" htmlFor="city">Ma ville</label>
          </div>

          <div className="inputBox">
            <input
              type="date"
              name="birthday"
              id="birthday"
              className="profile-input"
              value={birthday}
              readOnly
            />
            <label className="profile-label" htmlFor="birthday">Ma date de naissance</label>
          </div>
        </div>

        <button
          type="submit"
          className="profile-submit-btn"
        >
          Modifier mes informations
        </button>
      </form>
    </div>
  );
};

Profile.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  birthday: PropTypes.string.isRequired,
  updateField: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Profile;
