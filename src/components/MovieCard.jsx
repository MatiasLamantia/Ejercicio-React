import React from 'react';

function MovieCard({ movie, onSelect }) {

	return (

		<div onClick={onSelect} style={{cursor: 'pointer'}}>
			<h2>{movie.title}</h2>
			<img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
			<p>Fecha de Lanzamiento: {movie.release_date}</p>
		</div>
		
	);
}

export default MovieCard;