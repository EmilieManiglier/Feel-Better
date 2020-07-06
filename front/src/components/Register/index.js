/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

import './register.scss';

const Register = ({
  firstname,
  lastname,
  email,
  password,
  confirm_password,
  city,
  birthday,
  avatar,
  updateField,
  submitLogin,
}) => (
  <main className="register">
    <form
      className="register-form"
      onSubmit={(evt) => {
        evt.preventDefault();
        submitLogin();
      }}
    >
      <div className="register-container">
        <label className="register-label" htmlFor="firstname">
          Prénom
        </label>
        <input
          className="register-input"
          name="firstname"
          id="firstname"
          type="text"
          value={firstname}
          onChange={(evt) => {
            updateField(evt.currentTarget.name, evt.currentTarget.value);
          }}
        />
      </div>
      <div className="register-container">
        <label className="register-label" htmlFor="lastname">
          Nom
        </label>
        <input
          className="register-input"
          name="lastname"
          id="lastname"
          type="text"
          value={lastname}
          onChange={(evt) => {
            updateField(evt.currentTarget.name, evt.currentTarget.value);
          }}
        />
      </div>

      <div className="register-container register-container-email">
        <label className="register-label" htmlFor="email">
          Email
        </label>
        <input
          className="register-input"
          name="email"
          id="email"
          type="text"
          value={email}
          onChange={(evt) => {
            updateField(evt.currentTarget.name, evt.currentTarget.value);
          }}
        />
      </div>

      <div className="register-container">
        <label className="register-label" htmlFor="password">
          Mot de passe
        </label>
        <input
          className="register-input"
          name="password"
          id="password"
          type="password"
          required
          value={password}
          onChange={(evt) => {
            updateField(evt.currentTarget.name, evt.currentTarget.value);
          }}
        />
      </div>
  
      <div className="register-container">
        <label className="register-label" htmlFor="confirm_password">
          Confirmez le mot de passe
        </label>
        <input
          className="register-input"
          name="confirm_password"
          id="confirm_password"
          required
          type="password"
          value={confirm_password}
          onChange={(evt) => {
            updateField(evt.currentTarget.name, evt.currentTarget.value);
          }}
        />
      </div>
      <div className="register-container">
        <label className="register-label" htmlFor="city">
          Ville
        </label>
        <input
          className="register-input"
          name="city"
          id="city"
          type="text"
          value={city}
          onChange={(evt) => {
            updateField(evt.currentTarget.name, evt.currentTarget.value);
          }}
        />
      </div>
      <div className="register-container">
        <label className="register-label" htmlFor="birthday">
          Date de naissance
        </label>
        <input
          className="register-input"
          name="birthday"
          id="birthday"
          type="date"
          min="1900-01-01"
          max="3000-01-01"
          value={birthday}
          onChange={(evt) => {
            updateField(evt.currentTarget.name, evt.currentTarget.value);
          }}
        />
      </div>
      <div className="register-container register-container-avatar">
        <label className="register-label" htmlFor="avatar">
          Choisir une photo de profil
        </label>
        <input
          className="register-input"
          name="avatar"
          id="avatar"
          type="file"
          value={avatar}
          onChange={(evt) => {
            updateField(evt.currentTarget.name, evt.currentTarget.value);
          }}
        />
      </div>

      <div className="register-container register-container-cgu">
        <label className="register-label" htmlFor="cgu">
          Accepter les CGU
        </label>
        <input
          className="register-input"
          name="cgu"
          id="cgu"
          type="checkbox"
          required
          onClick={(evt) => {
            updateField(evt.currentTarget.name, evt.currentTarget.value);
          }}
        />
      </div>
      <button className="register-button" type="submit">
        Valider
      </button>
    </form>
  </main>
);

Register.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirm_password: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  birthday: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  updateField: PropTypes.func.isRequired,
  submitLogin: PropTypes.func.isRequired,
};

export default Register;
