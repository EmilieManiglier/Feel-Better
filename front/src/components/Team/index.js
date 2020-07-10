import React from 'react';

import Member from './Member';
import './team.scss';

const Team = () => (
  <div className="team">
    <div className="team-container">
      <Member name="Massimo Rosas" teamRole="Lead Dev Front" />
      <Member name="Chloé Cuny" teamRole="Product Owner" />
      <Member name="Emilie Maniglier" teamRole="Git Master" />
      <Member name="Quentin Barraud" teamRole="Scrum Master" />
      <Member name="Arnaud Gadroy" teamRole="Lead Dev Back" />
    </div>
  </div>
);

export default Team;
