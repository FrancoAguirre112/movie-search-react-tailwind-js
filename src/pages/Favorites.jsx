import { useFavoritesContext } from "../contexts/favoritesContext";
import { Movies } from "../components/Movies";

function Favorites() {
  const { favorites } = useFavoritesContext();

  return (
    <div className="container mx-auto my-10 space-y-10">
      {favorites.length > 0 ? (<Movies movies={favorites} />) : (<p className="flex items-center justify-center">It seems you haven't added anything to favorites yet.</p>)}
    </div>
  );
}

export default Favorites;
