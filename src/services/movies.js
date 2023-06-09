export const searchMovies = async ({ search }) => {
    if (search === '') return null;

    try {
        const response = await fetch(import.meta.env.VITE_OMBD_SEARCH_URL + search);
        const json = await response.json();

        const movies = json.Search

        return movies?.map(movie => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster
        }))
    } catch (error) {
        throw new Error('Error searching movies')
    }
}