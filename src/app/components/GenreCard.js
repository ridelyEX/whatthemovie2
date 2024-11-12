import React from 'react';
import '../styles/GenreCard.css';

const GenreCard = ({ genre, image }) => {
  return (
    <div className="genre-card">
        <img src={image} alt={genre} />
        <div className="genre-text">{genre}</div>
    </div>
  );
};

export default GenreCard;