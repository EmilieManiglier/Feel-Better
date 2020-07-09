/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import './header.scss';

const Header = ({ isLogged, logout }) => {
  const [addClass, setAddClass] = useState(false);

  return (
    <header className="header">
      <nav className="navbar">
        <span className="navbar-toggle">
          <input
            type="checkbox"
            id="checkbox4"
            className="checkbox4
            visuallyHidden"
            onClick={() => {
              setAddClass(!addClass);
            }}
          />
          <label htmlFor="checkbox4">
            <div className="hamburger">
              <span className="bar bar1" />
              <span className="bar bar2" />
              <span className="bar bar3" />
              <span className="bar bar4" />
              <span className="bar bar5" />
            </div>
          </label>
        </span>

        <h1 className="main-title">
          <Link to="/" className="logo">
            Feel Better
          </Link>
        </h1>
        <ul className={addClass ? 'main-nav active' : 'main-nav'}>
          <li>
            <NavLink
              exact
              to="/"
              className="nav-links"
              activeClassName="nav-links--active"
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/profile"
              className="nav-links"
              activeClassName="nav-links--active"
            >
              Profil
            </NavLink>
          </li>
          {isLogged && (
            <li>
              <NavLink
                exact
                to="/mood"
                className="nav-links"
              >
                Mon humeur
              </NavLink>
            </li>
          )}
          <li>
            <NavLink
              exact
              to="/calendar"
              className="nav-links"
              activeClassName="nav-links--active"
            >
              Calendrier
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/suggestions"
              className="nav-links"
              activeClassName="nav-links--active"
            >
              Activités
            </NavLink>
          </li>
          {isLogged && (
            <li>
              <NavLink
                exact
                to="/"
                className="nav-links"
                onClick={logout}
              >
                Se déconnecter
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

Header.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};

export default Header;
