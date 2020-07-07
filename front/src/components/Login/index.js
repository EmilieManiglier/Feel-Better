/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import './login.scss';

const Login = ({
  email,
  password,
  updateField,
  submitLogin,
  isLogged,
}) => {
  if (isLogged === true) {
    return <Redirect to="/" />;
  }

  return (
    <main className="login">
      <form
        className="login-form"
        onSubmit={(evt) => {
          evt.preventDefault();
          submitLogin();
        }}
      >
        <div className="input-container">
          <input
            className="login-input"
            value={email}
            name="email"
            id="email"
            type="text"
            required
            onChange={(evt) => {
              updateField(evt.currentTarget.name, evt.currentTarget.value);
            }}
          />
          <label className="login-label" htmlFor="email">
            Adresse email
          </label>
        </div>
        <div className="input-container">
          <input
            className="login-input"
            value={password}
            name="password"
            id="password"
            type="password"
            required
            onChange={(evt) => {
              updateField(evt.currentTarget.name, evt.currentTarget.value);
            }}
          />
          <label className="login-label" htmlFor="password">
            Mot de passe
          </label>
        </div>
        <button className="login-button" type="submit">
          Valider
        </button>
      </form>
    </main>
  );
};

Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  updateField: PropTypes.func.isRequired,
  submitLogin: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default Login;
