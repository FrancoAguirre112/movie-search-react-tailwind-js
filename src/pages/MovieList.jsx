import { useEffect } from "react";
import { Movies } from "../components/Movies.jsx";
import useMovies from "../hooks/useMovies";
import { useForm } from "react-hook-form";

function MovieList() {
  const { movies, getMovies } = useMovies();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  useEffect(() => {
    getMovies("avengers");
  }, []);

  const onSubmit = (data) => {
    if (isValid) getMovies(data.search);
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
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                id="inputSearch"
                type="text"
                placeholder="Avengers, The Matrix, The Hunger Games..."
                className="rounded-l-lg py-1 border-2 px-2 bg-gray-700"
                {...register("search", {
                  required: "Can't search for an empty movie",
                  minLength: {
                    value: 3,
                    message: "The search should have at least 3 characters",
                  },
                  pattern: {
                    value: /^(?!\d+$).*/,
                    message: "Can't search for a movie with only a number",
                  },
                })}
              />
              <button
                type="submit"
                className="text-white border-2 py-1 font-bold rounded-r-lg hover:bg-white hover:text-black transition-all"
              >
                Search
              </button>
            </form>
            {errors.search && <p className="text-red-600">{errors.search.message}</p>}
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
