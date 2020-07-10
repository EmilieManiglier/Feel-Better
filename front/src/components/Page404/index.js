import React from 'react';
import { Link } from 'react-router-dom';

import './page404.scss';

const Page404 = () => (

  <div className="error-container">
    <div className="error-404">
      <span>4</span>
      <span>
        <span className="screen-reader-text">0</span>
      </span>
      <span>4</span>
    </div>

    <span className="error-text">
      Page non trouvée
    </span>

    <Link to="/" className="link-back">
      Retour à la page d'accueil
    </Link>
  </div>

);

export default Page404;
