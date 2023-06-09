import { useFavoritesContext } from "../contexts/favoritesContext";
import { Movies } from '../components/Movies';

function Favorites() {
  const { favorites } = useFavoritesContext();

  return (
    <div className="container mx-auto my-10 space-y-10">
      {favorites.length > 0 && <Movies movies={favorites}/>}
  </div>
    
    
  );
}

export default Favorites;
