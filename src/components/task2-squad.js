import React from 'react';
import '../styles/football3.css';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const getRandomFontSize = () => `${Math.floor(Math.random() * 20) + 12}px`;


const CurrentSquad = ({ players = [] }) => {
  if (!Array.isArray(players)) {
    return null;
  }

  const containerStyle = {
    background: getRandomColor(),
    padding: '40px',
    textAlign: 'center',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '800px',
    margin: '20px auto'
  };

  const headingStyle = {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '2.5rem',
    color: getRandomColor(),
    marginBottom: '20px',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  };

  const listItemStyle = {
    fontFamily: 'Montserrat, serif',
    fontSize: getRandomFontSize(),
    color: getRandomColor(),
    marginBottom: '10px'
  };

  return (
    <section className="team-roster" style={containerStyle}>
      <h2 style={headingStyle}>Текущий состав команды</h2>
      <ul>
        {players.length > 0 ? (
          players.map((player, index) => (
            <li key={index} style={listItemStyle}>{player}</li>
          ))
        ) : (
          <li style={listItemStyle}>Нет игроков в составе</li>
        )}
      </ul>
    </section>
  );
};

export default CurrentSquad;