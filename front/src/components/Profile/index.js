/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Success from 'src/containers/Notification/Success';
import Error from 'src/containers/Notification/Error';
import Avatar from 'src/containers/Profile/Avatar';
import User from 'src/containers/Profile/User';

import './profile.scss';

const Profile = ({
  isLogged,
  successProfile,
  successAvatar,
  errors,
}) => {
  if (isLogged === false) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      {errors.length > 0 && (
        <Error />
      )}

      {successProfile && (
        <Success message="Tes informations ont bien été mises à jour !" />
      )}
      {successAvatar && (
        <Success message="Ton avatar a bien été mis à jour !" />
      )}
      <div className="profile">
        <Avatar />

        <User />

      </div>
    </>
  );
};

Profile.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  successProfile: PropTypes.bool.isRequired,
  successAvatar: PropTypes.bool.isRequired,
  errors: PropTypes.array.isRequired,
};

export default Profile;
