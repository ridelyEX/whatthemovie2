"use client"
import React from 'react';
import '../styles/MovieFrame.css';

const MovieFrame = ({ image, idx }) => {
  return (
    <div className={`movie-frame ${isCorrect ? 'correct' : ''}`}>
      <img src={image} alt="movie frame" />
    </div>
  );
};

export default MovieFrame;