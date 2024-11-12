import React from 'react';
import './MovieFrame.css';

const MovieFrame = ({ image, isCorrect }) => {
  return (
    <div className={`movie-frame ${isCorrect ? 'correct' : ''}`}>
      <img src={image} alt="movie frame" />
    </div>
  );
};

export default MovieFrame;