import React from 'react';
import '../styles/football2.css';

const Achievements = ({ titles = [] }) => {
  if (!Array.isArray(titles)) {
    return null;
  }

  return (
    <section className="achievements">
      <h2>Достижения</h2>
      <ul>
        {titles.length > 0 ? (
          titles.map((title, index) => (
            <li key={index}>{title}</li>
          ))
        ) : (
          <li>Нет достижений</li>
        )}
      </ul>
    </section>
  );
};

export default Achievements;