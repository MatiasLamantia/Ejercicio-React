import React, { useState } from 'react';
import { API_KEY } from '../config';
import axios from 'axios';

function SearchBar({updateMovies}) {

	const [searchTerm, setSearchTerm] = useState('');

	const handleSearchInputChange = (event) => {
		setSearchTerm(event.target.value);
	};

	const handleFormSubmit = async (event) => {

		event.preventDefault();

		try {
	   		const response = await 
			axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}`);
			updateMovies(response.data.results);
		} catch (error) {
			console.error('Error fetching movies:', error);
		}
	};

	return (

		<form onSubmit={handleFormSubmit}>
			<input type="text" value={searchTerm}
			onChange={handleSearchInputChange}
			placeholder="Buscar películas..." />
			<button type="submit">Buscar</button>
		</form>
		
	);
   }

export default SearchBar;