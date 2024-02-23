import React from 'react'
import MovieCard from './MovieCard';
import movies from './Movie';

const MovieList = ({movies}) => {
  const styledObject={display:"flex" , padding:'30px' , justifyContent: 'space-between'};
    return (
      <div className="movie-list" style={styledObject}>
        {movies.map((movie) => (
          <MovieCard key={movie.title}{...movie} />
        ))}
      </div>
    );
  };

export default MovieList
