"use client";
import React from 'react';
import '../styles/MovieFrame.css';

const MovieFrame = ({ image, onClick }) => {
  return (
    <div className="movie-frame" onClick={onClick}>
      <img src={image} alt="movie frame" />
    </div>
  );
};

export default MovieFrame;