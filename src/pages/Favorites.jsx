import { useFavoritesContext } from "../contexts/favoritesContext";
import { Movies } from "../components/Movies";

function Favorites() {
  const { favorites } = useFavoritesContext();

  const hasFavorites = favorites.length > 0;

  return (
    <div className="container mx-auto my-10 space-y-10">
      {hasFavorites ? (
        <Movies movies={favorites} />
      ) : (
        <p className="flex items-center justify-center">
          It seems you haven't added anything to favorites yet.
        </p>
      )}
    </div>
  );
}

export default Favorites;
