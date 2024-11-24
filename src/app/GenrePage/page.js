"use client"
import { useEffect, useState } from 'react';
import MovieFrame from '../components/MovieFrame';
import { useSearchParams } from 'next/navigation';
import '../styles/GenrePage.css';

export default function GenrePage(){
  const searchParams = useSearchParams();
  const number = searchParams.get('number');
  const genre= searchParams.get('genre')
  const [idx, setIdx] = useState(0);

  const [movies, setMovies] = useState([]);
  const [images, setImages]=useState([]);
  const [loading, setLoading] = useState(true); 

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=878&api_key=ada074b6a5691631b70bfbcaf68ebad9");
      const data = await response.json();
      console.log(data);
      const m=[];
      for(let i=0;i<4;i++){
        m.push({
          title: data.results[i].original_title,
          id: data.results[i].id
        });
      }
      setMovies()=m;
    } catch (error) {
      console.error('Error al llamar a la API:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchImages=async()=>{
    try {
      setLoading(true);
      const response = await fetch("https://api.themoviedb.org/3/movie/912649/images&api_key=ada074b6a5691631b70bfbcaf68ebad9");
      const data = await response.json();
      console.log(data);
      const i=[];
      for(let i=0;i<4;i++){
        i.push(data.backdrops[i].file_path);
      }
      setImages()=i;
    } catch (error) {
      console.error('Error al llamar a la API:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleOptionClick = (option) => {
  };

  const handleImageClick = () => {
    setIdx(prevIdx => (prevIdx + 1) % images.length);
  };

  useEffect(() => {
    fetchMovies();
    fetchImages();
  }, []);

  return (
    <div className="genre-page">
      <h1>{genre} Movies</h1>
      <div className="carousel-container">
        <MovieFrame images={images} idx={idx} />
      </div>
      <p>{number}</p>
    </div>
  );
};


