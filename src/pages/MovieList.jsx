import { Movies } from "../components/Movies.jsx";
import useMovies from "../hooks/useMovies";
import { useSearch } from "../hooks/useSearch.js";
import debounce from "just-debounce-it";

function MovieList() {
  console.log("render");
  const { search, updateSearch, error } = useSearch();
  const { movies, getMovies } = useMovies();

  const debouncedUpdateSearch = debounce(updateSearch, 500);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!error) getMovies({ search });
  };

  const handleChange = (event) => {
    const newSearch = event.target.value;
    debouncedUpdateSearch(newSearch);
  };

  return (
    <>
      <div className="container mx-auto px-2 my-10 space-y-10">
        {/* Search bar */}
        <section id="search">
          <div className="space-y-5">
            <h1 className="max-w-full text-4xl font-bold text-center md:text-5-xl">
              Search Movie
            </h1>
            <form
              className="md:space-x-1 grid grid-flow-col"
              onSubmit={handleSubmit}
            >
              <input
                id="search"
                type="text"
                placeholder="Avengers, The Matrix, The Hunger Games..."
                className="rounded-l-lg py-1 border-2 px-2 bg-gray-700"
                onChange={handleChange}
              />
              <button
                type="submit"
                className="text-white border-2 py-1 font-bold rounded-r-lg hover:bg-white hover:text-black transition-all"
              >
                Search
              </button>
            </form>
          </div>
        </section>

        {/* List of movies */}
        <section id="movieList">
          <Movies movies={movies} />
        </section>
      </div>
    </>
  );
}

export default MovieList;
