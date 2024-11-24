import React from 'react';
import '../styles/TitleCard.css';
import Link from 'next/link';

const TitleCard = () => {
  return (
    <div className="title-card">
      <nav>
      <div className="title-text-container">
        <h1 className="title-text">Movie Guesser</h1>
        <Link href="MainPage"><h1>Play</h1></Link>
      </div>
      </nav>
    </div>
  );
};

export default TitleCard;