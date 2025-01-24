import React from 'react';
import MovieCard from './MovieCard';

function MovieList({ movies, onMovieSelect }) {
	return (
		<div>

			{movies && movies.map(movie => (
				<MovieCard key={movie.id} movie={movie} onSelect={() => onMovieSelect(movie)} />
			))
			}
			
		</div>
	);
}

export default MovieList;