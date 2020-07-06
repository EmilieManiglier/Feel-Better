/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

import './header.scss';

const Header = () => {
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
              to="/activities"
              className="nav-links"
              activeClassName="nav-links--active"
            >
              Activités
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
