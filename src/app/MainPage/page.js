import React from 'react';
import TitleCard from '../components/TitleCard';
import '../styles/MenuPage.css';
import GenreCard from '../components/GenreCard';

export default function MenuPage(){
  const genres = [
    { name: 'Sci-Fi', image: 'scifi.jpg' },
    { name: 'Romance', image: 'romance.jpg' },
    { name: 'Animated', image: 'animated.jpg' },
    { name: 'Comedy', image: 'comedy.jpg' },
    { name: 'Disney', image: 'disney.jpg' },
    { name: 'Horror', image: 'horror.jpg' },
  ];

  return (
    <div className="menu-page">
      <div className="genre-grid">
        {genres.map((genre, index) => (
          <GenreCard key={index} genre={genre.name} image={genre.image} />
        ))}
      </div>
    </div>
  );
};