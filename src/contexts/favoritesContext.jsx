import { useContext, useState, createContext, useCallback, useMemo } from "react";

const FavoritesContext = createContext(null);

export const FavoritesContextProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const addToFavorites = useCallback((movie) => {
        if (isFavorite(movie.id)) return;
        setFavorites([...favorites, movie]);
    }, [favorites]);

    const removeFromFavorites = useCallback((movie) => {
        setFavorites( favorites.filter( (favMovie) => favMovie.id !== movie.id ) );
    }, [favorites]);

    const isFavorite = useCallback((movieId) => {
        return favorites.some( (movie) => movie.id === movieId);
    }, [favorites]);

    const value = useMemo(() => ({
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }), [favorites, addToFavorites, removeFromFavorites, isFavorite]);

    return (<FavoritesContext.Provider value={value}> {children} </FavoritesContext.Provider>);

}

export function useFavoritesContext() {
    return useContext(FavoritesContext);
}