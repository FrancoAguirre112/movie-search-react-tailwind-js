import { Routes, Route } from "react-router-dom";
import { routes } from "./config/router/paths";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import MovieList from "./pages/MovieList.jsx";
import MovieDetails from "./pages/MovieDetails.jsx";
import Favorites from "./pages/Favorites.jsx";
import PrivateRoute from "./components/router/PrivateRoute";

function App() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen bg-main text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={routes.MOVIE_LIST} element={<MovieList />} />
        <Route path={routes.MOVIE_DETAILS} element={<MovieDetails />} />
        <Route path={routes.ABOUT_US} element={<AboutUs />} />

        <Route element={<PrivateRoute />}>
          <Route path={routes.FAVORITES} element={<Favorites />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
