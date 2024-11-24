import React from 'react';
import '../styles/TitleCard.css';
import Link from 'next/link';

const TitleCard = () => {
  return (
    <div className="title-card">
      <div className="title-text-container">
        <h1 className="title-text">Movie Guesser</h1>
      </div>
      <nav>
        <div className="play-button-container">
        <Link href="/MainPage">Play</Link>
        </div>
      </nav>
    </div>
  );
};

export default TitleCard;