import { useRef, useState, useCallback } from "react";
import { searchMovies } from "../services/movies.js";

export default function useMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previousSearch = useRef(null);

  const getMovies = useCallback(async ( search ) => {
    if (search === previousSearch.current) return;

    try {
      setLoading(true);

      previousSearch.current = search;
      const newMovies = await searchMovies( search );
      setMovies(newMovies);
      setError(null);

    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);
  return { movies, loading, getMovies, error };
}
