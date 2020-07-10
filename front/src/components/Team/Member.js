import React from 'react';
import * as Icon from 'react-feather';
import PropTypes from 'prop-types';

import profile from 'src/assets/images/profile.jpg';
import './team.scss';

const Member = ({ name, teamRole }) => (
  <div className="team-profile">
    <div className="picture">
      <img className="profile-img" src={profile} alt="" />
    </div>
    <div className="team-content">
      <h3 className="name">{name}</h3>
      <h4 className="title">{teamRole}</h4>
    </div>
    <ul className="social">
      <li>
        <a href="" aria-hidden="true">
          <Icon.Facebook />
        </a>
      </li>
      <li>
        <a href="" aria-hidden="true">
          <Icon.Twitter />
        </a>
      </li>
      <li>
        <a href="" aria-hidden="true">
          <Icon.Linkedin />
        </a>
      </li>
    </ul>
  </div>
);

Member.propTypes = {
  name: PropTypes.string.isRequired,
  teamRole: PropTypes.string.isRequired,
};

export default Member;
