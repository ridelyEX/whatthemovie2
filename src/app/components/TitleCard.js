import React from 'react';
import '../styles/TitleCard.css';
import Link from 'next/link';

const TitleCard = () => {
  return (
    <div className="title-card">
      <nav>
      <div className="title-text-container">
        <h1 className="title-text">Movie Guesser</h1>
        <Link href="MainPage">Play</Link>
        <Link href="/LoginPage">Iniciar Sesion</Link>
        <Link href="/SignUpPage">Registrarse</Link>
      </div>
      </nav>
    </div>
  );
};

export default TitleCard;