export const getMovieDetails = async (id) => {
    if (id === '') return null;

    try {
        const response = await fetch(import.meta.env.VITE_OMDB_DETAIL_URL + id);
        const json = await response.json();

        const movieDetail = json;

        return {
            id: movieDetail.imdbID,
            title: movieDetail.Title,
            year: movieDetail.Year,
            poster: movieDetail.Poster,
            genre: movieDetail.Genre,
            rated: movieDetail.Rated,
            actors: movieDetail.Actors,
            plot: movieDetail.Plot,
            rating: (Number(movieDetail.Metascore)/20), //Rating from 1 to 5

        };
    } catch (error) {
        throw new Error('Error while fetching the movie details')
    }
}