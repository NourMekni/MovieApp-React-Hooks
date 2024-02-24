// MovieList.js
import React from 'react';
import MovieCard from './MovieCard';
import { Link, useNavigate } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const navigate=useNavigate();
  const styledObject = {
    display: "flex",
    padding: '30px',
    justifyContent: 'space-between'
  };

  return (
    <div className="movie-list" style={styledObject}>
      {movies.map((movie) => (
        <div key={movie.title}>
          <MovieCard {...movie} />
          <button onClick={(e)=>{navigate("/d", {state :{title:movie.title,description:movie.description,videoURL:movie.videoURL}})}}>See Details</button>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
