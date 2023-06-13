import { useEffect, useState } from "react";
import { getMovieDetails } from "../services/movieDetail";

export function useMovieDetails(movieId) {
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setIsLoading(true);
      try {
        const details = await getMovieDetails(movieId);
        setMovieDetails(details);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (movieId) {
      fetchMovieDetails();
    }

    return () => {
      // Clean up the effect if the component is unmounted or if the movieId changes
      setIsLoading(false);
      setMovieDetails(null);
      setError(null);
    };
  }, [movieId]);

  return { movieDetails, isLoading, error };
}
