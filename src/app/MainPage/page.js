import React from 'react';
import '../styles/MenuPage.css';
import GenreCard from '../components/GenreCard';
import Link from 'next/link';

export default function MenuPage(){
  const genres = [
    { name: 'Sci-Fi', image: 'scifi.png', number:878 },
    { name: 'Animated', image: 'scifi.png', number:16},
    { name: 'Comedy', image: 'scifi.png', number:35 },
    { name: 'Horror', image: 'scifi.png', number:27 },
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