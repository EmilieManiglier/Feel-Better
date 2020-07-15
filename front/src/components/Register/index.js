/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';

import './register.scss';

const Register = ({
  firstname,
  lastname,
  email,
  password,
  confirm_password,
  city,
  birthday,
  // avatar,
  updateField,
  submitRegister,
  isLogged,
}) => {
  if (isLogged === true) {
    return <Redirect to="/" />;
  }

  return (
    <main className="register">
      <h2 className="register-title">S'inscrire</h2>
      <form
        className="register-form"
        onSubmit={(evt) => {
          evt.preventDefault();
          submitRegister();
        }}
      >
        <div className="register-container">
          <input
            className="register-input"
            value={firstname}
            name="firstname"
            id="firstname"
            type="text"
            required
            onChange={(evt) => {
              updateField(evt.currentTarget.name, evt.currentTarget.value);
            }}
          />
          <label className="register-label" htmlFor="firstname">
            Prénom
          </label>
        </div>
        <div className="register-container">
          <input
            className="register-input"
            value={lastname}
            name="lastname"
            id="lastname"
            type="text"
            required
            onChange={(evt) => {
              updateField(evt.currentTarget.name, evt.currentTarget.value);
            }}
          />
          <label className="register-label" htmlFor="lastname">
            Nom
          </label>
        </div>
        <div className="register-container email-container">
          <input
            className="register-input"
            value={email}
            name="email"
            id="email"
            type="text"
            required
            onChange={(evt) => {
              updateField(evt.currentTarget.name, evt.currentTarget.value);
            }}
          />
          <label className="register-label" htmlFor="email">
            Adresse email
          </label>
        </div>
        <div className="register-container">
          <input
            className="register-input"
            value={password}
            name="password"
            id="password"
            type="password"
            required
            onChange={(evt) => {
              updateField(evt.currentTarget.name, evt.currentTarget.value);
            }}
          />
          <label className="register-label" htmlFor="password">
            Mot de passe
          </label>
        </div>
        <div className="register-container">
          <input
            className="register-input"
            value={confirm_password}
            name="confirm_password"
            id="confirm_password"
            type="password"
            required
            onChange={(evt) => {
              updateField(evt.currentTarget.name, evt.currentTarget.value);
            }}
          />
          <label className="register-label" htmlFor="confirm_password">
            Confirmez le mot de passe
          </label>
        </div>

        <div className="register-container">
          <input
            className="register-input"
            value={city}
            name="city"
            id="city"
            type="text"
            required
            onChange={(evt) => {
              updateField(evt.currentTarget.name, evt.currentTarget.value);
            }}
          />
          <label className="register-label" htmlFor="city">
            Ville
          </label>
        </div>

        <div className="register-container">
          <input
            className="register-input birthday-input"
            value={birthday}
            name="birthday"
            id="birthday"
            type="date"
            min="1900-01-01"
            max="3000-01-01"
            required
            onChange={(evt) => {
              updateField(evt.currentTarget.name, evt.currentTarget.value);
            }}
          />
          <label className="register-label" htmlFor="birthday">
            Date de naissance
          </label>
        </div>
        {/*
        <div className="register-container register-container-avatar">
          <label className="register-label" htmlFor="avatar">
            Choisir une photo de profil
          </label>
          <input
            className="register-input"
            name="avatar"
            id="avatar"
            type="file"
            accept="image/png, image/jpeg, image/gif, image/jpg"
            onChange={(evt) => {
              updateField(evt.currentTarget.name, evt.target.files[0]);
              console.log('evt.target.files[0]: ', evt.target.files[0]);
            }}
          />
        </div>
        */}

        <div className="register-container cgu-container">
          <input
            className="register-input cgu-input"
            name="cgu"
            id="cgu"
            type="checkbox"
            required
            onChange={(evt) => {
              updateField(evt.currentTarget.name, evt.currentTarget.value);
            }}
          />
          <label className="register-label" htmlFor="cgu">
            Accepter les CGU
          </label>
          <div className="cgu-checkbox" />
        </div>

        <button className="register-button" type="submit">
          Valider
        </button>
      </form>

      <Link to="/login" className="register-redirect">Déjà inscrit ? C'est par ici !</Link>
    </main>
  );
};

Register.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirm_password: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  birthday: PropTypes.string.isRequired,
  isLogged: PropTypes.bool.isRequired,
  // avatar: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  updateField: PropTypes.func.isRequired,
  submitRegister: PropTypes.func.isRequired,
};

export default Register;