import { useRef, useState, useCallback } from "react";
import { searchMovies } from "../services/movies.js";

export default function useMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previousSearch = useRef(null);

  const getMovies = useCallback(async ({ search }) => {
    if (search === previousSearch.current) return;

    try {
      setLoading(true);

    //   const cachedMovies = localStorage.getItem("cachedMovies");
    //   console.log(cachedMovies)
    //   if (cachedMovies) {
    //     setMovies(JSON.parse(cachedMovies));
    //     setError(null);
    //     setLoading(false);
    //     console.log(movies)
    //   }

      previousSearch.current = search;
      const newMovies = await searchMovies({ search });
      setMovies(newMovies);
      setError(null);
      console.log(movies)

    //   localStorage.setItem("cachedMovies", JSON.stringify(newMovies));
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);
//   if (error) return error;
  return { movies, loading, getMovies };
}
