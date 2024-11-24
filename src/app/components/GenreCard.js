import React from 'react';
import '../styles/GenreCard.css';
import Link from 'next/link';

const GenreCard = ({ genre, image, number }) => {
  return (
    <div className="genre-card">
      <nav>
        <Link href={{ pathname: '/GenrePage', query: { genre,number } }}>
          <div>
            <img src={image} alt={genre} />
            <div className="genre-text">{genre}</div>
          </div>
        </Link>
      </nav>
    </div>
  );
};

export default GenreCard;