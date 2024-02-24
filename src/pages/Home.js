import React from 'react'
import  { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from '../components/MovieList';
import Filter from '../components/Filter';
import Description from '../components/Description';
import movies from '../components/Movie';

const Home = () => {
    const [searchWord, setSearchWord] = useState('');
  const [rate, setRate] = useState('');
  const [film, setFilm] = useState({
    title: '',
    description: '',
    rating: '',
    posterURL: ''
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    if (film.title && film.description && film.rating && film.posterURL) {
      setMovieList([...movieList, film]);
      setFilm({
        title: '',
        description: '',
        rating: '',
        posterURL: ''
      });
    }
  };

  const [movieList, setMovieList] = useState(movies);
  return (
    <div>
        <h4>FIND A MOVIE</h4>
       <Filter setRate={setRate} setSearchWord={setSearchWord} />
      {console.log(searchWord)}

      <form onSubmit={handleSubmit} >
        <br/>
        <h4>ADD A MOVIE</h4>
        <div><input
          type='text'
          value={film.title}
          onChange={(e) => setFilm({ ...film, title: e.target.value })}
          placeholder="Title"
        />
        </div>
        <div>
        <input
          type='text'
          value={film.description}
          onChange={(e) => setFilm({ ...film, description: e.target.value })}
          placeholder="Description"
        />
        </div>
        <div>
        <input
          type='text'
          value={film.rating}
          onChange={(e) => setFilm({ ...film, rating: e.target.value })}
          placeholder="Rating"
        />
        </div>
        <div>
        <input
          type='text'
          value={film.posterURL}
          onChange={(e) => setFilm({ ...film, posterURL: e.target.value })}
          placeholder="Poster URL"
        />
        </div>
        <div>
        <button type="submit">Add Movie</button>
        </div>
      </form>

      <MovieList movies={searchWord !== "" ?
        movieList.filter(e => e.title.toLowerCase().includes(searchWord.toLocaleLowerCase()))
        : rate !== "" ? movieList.filter(e => e.rating == rate)
          : movieList} />
    </div>
  )
}

export default Home
