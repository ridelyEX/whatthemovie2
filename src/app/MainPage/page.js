import React from 'react';
import '../styles/MenuPage.css';
import GenreCard from '../components/GenreCard';
import Link from 'next/link';

export default function MenuPage(){
  const genres = [
    { name: 'Sci-Fi', image: 'scifi.jpg', number:878 },
    { name: 'Animated', image: 'animated.jpg', number:16},
    { name: 'Comedy', image: 'comedy.jpg', number:35 },
    { name: 'Horror', image: 'horror.jpg', number:27 },
  ];

  return (
    <div className="menu-page">
      <div className="genre-grid">
        {genres.map((genre, index) => (
          <GenreCard key={index} genre={genre.name} image={genre.image} number={genre.number} />
        ))}
      </div>
    </div>
  );
};