import { useParams } from "react-router";
import { useMovieDetails } from "../hooks/useMovieDetails";
import RenderStars from "../components/Rating";

function MovieDetails() {
  const { id } = useParams();
  const { movieDetails } = useMovieDetails(id);

  if (!movieDetails) {
    return <div className="flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="my-5 pb-56 grid grid-rows-[60%_40%] gap-2 space-y-4 container px-2 mx-auto md:grid-cols-[40%_60%] md:pb-0">
      <img className="hidden rounded-lg md:flex" src={movieDetails.poster} alt={`a poster of the movie ${movieDetails.title}`} />
      <div
        className="h-full bg-cover md:bg-[center_-15rem] rounded-lg md:hidden"
        style={{ backgroundImage: `url("${movieDetails.poster}")` }}
        alt={`poster for the movie ${movieDetails.title}`}
      >
        <div className="h-full bg-gradient-to-t from-[#1B1B1B]"></div>
      </div>

      <div className="flex flex-col space-y-4">
        <h1 className="text-xl text-left font-bold">{movieDetails.title}</h1>
        <h2 className="text-gray-400">
          {movieDetails.year} | {movieDetails.rated} | {movieDetails.genre}
        </h2>
        <RenderStars rating={movieDetails.rating} />
        <p>{movieDetails.plot}</p>
        <div className="flex space-x-2">
          <h2 className="text-gray-400">Protagonists: </h2>
          <p className="text-white">{movieDetails.actors}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
