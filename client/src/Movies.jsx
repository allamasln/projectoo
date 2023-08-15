import { useEffect, useState } from 'react'

import axios from 'axios'

function Movies() {
	const [movies, setMovies] = useState([])

	useEffect(() => {
		axios
			.get('https://api-projectoo.onrender.com/movies')
			.then(({ data }) => setMovies(data))
	}, [])

	return (
		<div>
			<h2>Movies</h2>

			<ul>
				{movies.map((movie) => (
					<li key={movie.id}>
						{movie.title} {movie.year}
					</li>
				))}
			</ul>
		</div>
	)
}
export default Movies
