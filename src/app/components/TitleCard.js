import React from 'react';
import '../styles/TitleCard.css';

const TitleCard = () => {
  return (
    <div className="title-card">
      <div className="title-text-container">
        <h1 className="title-text">Movie Guesser</h1>
      </div>
      <div className="play-button-container">
        <button className="play-button">
          <span className="material-symbols-outlined">play_circle</span>
        </button>
      </div>
    </div>
  );
};

export default TitleCard;