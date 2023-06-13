import { useFavoritesContext } from "../contexts/favoritesContext";
import { Link } from "react-router-dom";
import noPosterFound from "../assets/noPosterFound.png";
import { useAuthContext } from "../contexts/authContext";

function ListOfMovies({ movies }) {
  const { addToFavorites, removeFromFavorites, isFavorite } =
    useFavoritesContext();
    const { isAuthenticated } = useAuthContext();

  const handleFavorites = (movie) => {
    if(!isAuthenticated) return;
    
    if (isFavorite(movie.id)) {
      removeFromFavorites(movie);
    } else {
      addToFavorites(movie);
    }
  };

  return (
    <ul className="grid grid-cols-2 gap-5 md:grid-cols-3">
      {movies.map((movie) => {
        const isFav = isFavorite(movie.id);

        return (
          <div
            style={{
              backgroundImage: `url("${
                movie.poster === "N/A" ? noPosterFound : movie.poster
              }")`,
            }}
            key={movie.id}
            className="relative z-0 bg-cover rounded-lg border-2 border-gray-400 w-auto h-[18rem] lg:h-[30rem] md:hover:scale-105 transition-transform"
          >
            <div className="flex justify-center rounded-lg h-full bg-gradient-to-t from-black">
              {isAuthenticated && (<button
                onClick={() => handleFavorites(movie)}
                className={`${
                  isFav ? "text-[#F8C400]" : "text-white"
                } right-0 absolute z-50`}
              >
                <div className="bg-gray-400 p-2 rounded-bl-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill={isFav ? "#F8C400" : "none"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                  </svg>
                </div>

              </button>)}
              <li className="text-white text-center text-xl flex flex-col items-center justify-end md:text-2xl">
                <h3 className="font-bold">{movie.title}</h3>
                <p className="mb-4">{movie.year}</p>
              </li>
            </div>
            <Link className="absolute w-full h-full inset-0" to={`/movie/${movie.id}`} />
          </div>
        );
      })}
    </ul>
  );
}

function NoMovieResults() {
  return <p>No movies where found for the title you specified.</p>;
}

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0;

  return hasMovies ? <ListOfMovies movies={movies} /> : <NoMovieResults />;
}
