/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Backpack,
  Cat,
  Chocolate,
  Ghost,
  IceCream,
} from 'react-kawaii';

import './profile.scss';

const Profile = ({
  isLogged,
  avatar,
  firstname,
  lastname,
  email,
  city,
  birthday,
  updateField,
  handleSubmit,
  avatarType,
  avatarMood,
  avatarColor,
  updateAvatarMood,
  updateAvatarType,
  updateAvatarColor,
  handleAvatarSubmit,
  errors,
}) => {
  if (isLogged === false) {
    return <Redirect to="/login" />;
  }

  // create an array for each avatar
  const componentList = {
    Backpack,
    Cat,
    Chocolate,
    Ghost,
    IceCream,
  };

  // Get component name from the array componentList according to user's avatar
  // Or get avatar from server's datas if user has changed its avatar
  const UserAvatar = componentList[avatarType || avatar.type];

  return (
    <>
      {errors.length > 0 && (
        <ul className="register-errors">
          {errors.map((error) => (
            <li key={error.propertyPath} className="register-error">{error.propertyPath} : {error.title}</li>
          ))}
        </ul>
      )}
      <div className="profile">
        <form
          className="avatar-form"
          onSubmit={(evt) => {
            evt.preventDefault();
            handleAvatarSubmit();
          }}
        >
          <div className="avatar-container">
            <div className="avatar-custom">
              <label htmlFor="avatar-type">
                <select
                  name="avatar-type"
                  id="avatar-type"
                  className="avatar-type"
                  value={avatarType}
                  onChange={(evt) => {
                    updateAvatarType(evt.currentTarget.value);
                  }}
                >
                  <option defaultValue>Choisis un avatar</option>
                  <option value="Backpack">Sac à dos</option>
                  <option value="Cat">Chat</option>
                  <option value="Chocolate">Chocolat</option>
                  <option value="Ghost">Fantôme</option>
                  <option value="IceCream">Glace</option>
                </select>
              </label>
  
              <label htmlFor="avatar-mood">
                <select
                  name="avatar-mood"
                  id="avatar-mood"
                  className="avatar-mood"
                  value={avatarMood}
                  onChange={(evt) => {
                    updateAvatarMood(evt.currentTarget.value);
                  }}
                >
                  <option defaultValue>Choisis une humeur</option>
                  <option value="sad">Triste</option>
                  <option value="shocked">Choqué</option>
                  <option value="happy">Content</option>
                  <option value="excited">Joyeux</option>
                  <option value="blissful">Heureux</option>
                  <option value="lovestruck">Amoureux</option>
                  <option value="ko">K.O</option>
                </select>
              </label>
  
              <label htmlFor="avatar-color">
                <input
                  type="color"
                  name="avatar-color"
                  id="avatar-color"
                  className="avatar-color"
                  value={avatarColor}
                  onChange={(evt) => {
                    updateAvatarColor(evt.currentTarget.value);
                  }}
                />
              </label>
  
            </div>
            <div className="profile-avatar">
              <UserAvatar
                size={170}
                mood={avatarMood || avatar.mood}
                color={avatarColor || avatar.color}
              />
            </div>
            <button
              type="submit"
              className="profile-avatar-btn"
            >
              Changer ma photo de profil
            </button>
          </div>
        </form>
  
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
              <label className="profile-label" htmlFor="password">Mon mot de passe  <span className="needed">*</span></label>
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
          <span className="needed-content">( * : champ obligatoire )</span>
        </form>
      </div>
    </>
  );
};

Profile.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  email: PropTypes.string,
  city: PropTypes.string,
  birthday: PropTypes.string,
  avatar: PropTypes.object,
  avatarType: PropTypes.string.isRequired,
  avatarMood: PropTypes.string.isRequired,
  avatarColor: PropTypes.string.isRequired,
  updateField: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  updateAvatarMood: PropTypes.func.isRequired,
  updateAvatarType: PropTypes.func.isRequired,
  updateAvatarColor: PropTypes.func.isRequired,
  handleAvatarSubmit: PropTypes.func.isRequired,
  errors: PropTypes.array.isRequired,
};

Profile.defaultProps = {
  firstname: '',
  lastname: '',
  email: '',
  city: '',
  avatar: {},
  birthday: '',
};
export default Profile;
