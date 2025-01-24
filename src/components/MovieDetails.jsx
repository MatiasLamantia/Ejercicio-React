import React from 'react';

function MovieDetails({ movie, volverAtras}) {

	return (

		<div onClick={volverAtras}>
			<h1>{movie.title}</h1>
			<img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
			<p>Fecha de Lanzamiento: {movie.release_date}</p>
			<p>{movie.overview}</p>
		</div>
		
  );
}

export default MovieDetails;