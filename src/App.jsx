import React from 'react';
import { useState } from 'react';

import axios from 'axios';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';

import { API_KEY } from './config';

function App() {

  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [reparto, setReparto] = useState(); 

  const updateMovies = (newMovies) => {
    setMovies(newMovies);
  };

  const updateSelectedMovie = (movie) => {
    setSelectedMovie(movie);
  }

  const borrarSeleccion = () => {
    setSelectedMovie(null);
  }

  return (
    <div>
      
      <SearchBar updateMovies={updateMovies} />
      {selectedMovie?(<MovieDetails movie={selectedMovie} volverAtras={borrarSeleccion} />)
      :(<MovieList movies={movies} onMovieSelect={updateSelectedMovie} />) }
    </div>
  );
}

export default App;