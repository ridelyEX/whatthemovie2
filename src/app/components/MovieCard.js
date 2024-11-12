import React from 'react';
import './MovieCard.css';

const MovieCard = ({ image }) => {
  return (
    <div className="movie-card">
      <img src={image} alt="movie frame" />
      
    </div>
  );
};

export default MovieCard;