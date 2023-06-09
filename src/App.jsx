import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './contexts/authContext';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import AboutUs from './pages/AboutUs.jsx';
import MovieList from './pages/MovieList.jsx';
import MovieDetails from './pages/MovieDetails.jsx';
import Favorites from './pages/Favorites.jsx';
import PublicRoute from './components/router/PublicRoute';
import PrivateRoute from './components/router/PrivateRoute';
import { PRIVATE, FAVORITES, ABOUT_US, MOVIE_LIST, MOVIE_DETAILS } from './config/router/paths';
import { FavoritesContextProvider } from './contexts/favoritesContext';

function App() {
  return (
    <AuthContextProvider >
      <FavoritesContextProvider>
      <div className='grid grid-rows-[auto_1fr_auto] min-h-screen bg-main text-white'>
              <Navbar />
              <Routes path='/' element={ <PublicRoute /> }>
                <Route index element={<Home />} />
                <Route path={MOVIE_LIST} element={<MovieList />} />
                <Route path={MOVIE_DETAILS} element={<MovieDetails />} />
                <Route path={ABOUT_US} element={<AboutUs />} />
              </Routes>
              <Routes path={PRIVATE} element={ <PrivateRoute /> }>
                <Route path={FAVORITES} element={<Favorites />} />
              </Routes>
              <Footer />
      </div>
      </FavoritesContextProvider>
    </AuthContextProvider>
    
  );
}

export default App;
