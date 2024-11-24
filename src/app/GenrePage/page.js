import React, { useState } from 'react';
import MovieFrame from '../components/MovieFrame';
import OptionButtons from '../components/OptionButtons';
import PointsCounter from '../components/PointsCounter';
import '../styles/GenrePage.css';

export default function GenrePage({ genre, UsrEmail}){
  const [currentImage, setCurrentImage] = useState(0);
  const [points, setPoints] = useState(100);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleOptionClick = (option) => {
    if (option === movieOptions[currentImage]) {
      setIsCorrect(true);
      setPoints(points - 10);
    } else {
      setPoints(points - 20);
    }
  };

  return (
    <div className="genre-page">
      <h1>{genre} Movies</h1>
      <div className="carousel-container">
        <MovieFrame image={movieImages[currentImage]} isCorrect={isCorrect} />
      </div>
      <OptionButtons options={movieOptions} onOptionClick={handleOptionClick} />
      <PointsCounter points={points} />
    </div>
  );
};

