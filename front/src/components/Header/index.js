import React, { useState } from 'react';

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
          <a href="#" className="logo">
            Feel Better
          </a>
        </h1>
        <ul className={addClass ? 'main-nav active' : 'main-nav'}>
          <li>
            <a href="#" className="nav-links">Accueil</a>
          </li>
          <li>
            <a href="#" className="nav-links">Profil</a>
          </li>
          <li>
            <a href="#" className="nav-links">Calendrier</a>
          </li>
          <li>
            <a href="#" className="nav-links">Activités</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
