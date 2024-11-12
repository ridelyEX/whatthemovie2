import React from 'react';
import GenreCard from '../app/components/GenreCard';
import Link from 'next/link';
import './MenuPage.css'

export default function Home() {
  const genres=[
    { name: 'Sci-Fi', image: 'scifi.jpg' },
    { name: 'Romance', image: 'romance.jpg' },
    { name: 'Animated', image: 'animated.jpg' },
    { name: 'Comedy', image: 'comedy.jpg' },
    { name: 'Disney', image: 'disney.jpg' },
    { name: 'Horror', image: 'horror.jpg' },
  ]
  return(
    <div className='menu-page'>
    <div className='genre-grid'>
      <nav>
        <Link href="/MainPage">XD</Link>
          {genres.map((genre, index)=>(
            <Link href={"/"+genre.name}>
              <GenreCard key={index} genre={genre.name} image={genre.image} />
            </Link>
          ))}
      </nav>
    </div>
    </div>
  )
}
