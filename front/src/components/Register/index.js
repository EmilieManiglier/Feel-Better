/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import {
  Backpack,
  Cat,
  Chocolate,
  Ghost,
  IceCream,
} from 'react-kawaii';

import './register.scss';

const Register = ({
  firstname,
  lastname,
  email,
  password,
  confirm_password,
  city,
  birthday,
  updateField,
  saveAvatar,
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
            Prénom <span className="needed">*</span>
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
            Nom <span className="needed">*</span>
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
            Adresse email <span className="needed">*</span>
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
            Mot de passe <span className="needed">*</span>
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
            Confirmez le mot de passe <span className="needed">*</span>
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
            Ville <span className="needed">*</span>
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
            Date de naissance <span className="needed">*</span>
          </label>
        </div>

        <div className="register-container avatar-container">
          <p>Choisissez un avatar <span className="needed">*</span></p>
          <div className="avatar-list">
            <input
              className="avatar-input"
              name="avatar"
              id="Backpack"
              type="radio"
              required
              onChange={(evt) => {
                saveAvatar(evt.currentTarget.id);
              }}
            />
            <label htmlFor="Backpack">
              <Backpack />
            </label>

            <input
              className="avatar-input"
              name="avatar"
              id="Cat"
              type="radio"
              required
              onChange={(evt) => {
                saveAvatar(evt.currentTarget.id);
              }}
            />
            <label htmlFor="Cat">
              <Cat />
            </label>

            <input
              className="avatar-input"
              name="avatar"
              id="Chocolate"
              type="radio"
              required
              onChange={(evt) => {
                saveAvatar(evt.currentTarget.id);
              }}
            />
            <label htmlFor="Chocolate">
              <Chocolate />
            </label>

            <input
              className=""
              name="avatar"
              id="Ghost"
              type="radio"
              required
              onChange={(evt) => {
                saveAvatar(evt.currentTarget.id);
              }}
            />
            <label htmlFor="Ghost">
              <Ghost />
            </label>

            <input
              className="avatar-input"
              name="avatar"
              id="IceCream"
              type="radio"
              required
              onChange={(evt) => {
                saveAvatar(evt.currentTarget.id);
              }}
            />
            <label htmlFor="IceCream">
              <IceCream />
            </label>
          </div>

        </div>

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
            Accepter les CGU <span className="needed">*</span>
          </label>
          <div className="cgu-checkbox" />
        </div>

        <button className="register-button" type="submit">
          Valider
        </button>
        <span className="needed-content">( * : champ obligatoire )</span>
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
  updateField: PropTypes.func.isRequired,
  saveAvatar: PropTypes.func.isRequired,
  submitRegister: PropTypes.func.isRequired,
};

export default Register;
