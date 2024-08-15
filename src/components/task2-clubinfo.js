import React from 'react';
import chernomorets from '../images/chernomorets.png';
import '../styles/football1.css';

const ClubInfo = ({ city, foundationDate }) => {
  return (
    <section class="club-info">
      <p><strong>Город:</strong> {city}</p>
      <p><strong>Дата основания:</strong> {foundationDate}</p>
      <img src={chernomorets} />
    </section>
  );
};

export default ClubInfo;