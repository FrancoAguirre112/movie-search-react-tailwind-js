import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../contexts/authContext";
import { routes } from "../config/router/paths"
import Login from "../pages/Login";
import Logo from "./Logo";
import hamburgerMenuOpen from "../assets/icons/menu/hamburgerMenuOpen.svg";
import hamburgerMenuClose from "../assets/icons/menu/hamburgerMenuClose.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logout, isAuthenticated } = useAuthContext();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { to: routes.MOVIE_LIST, text: "Search" },
    { to: routes.FAVORITES, text: "Favorites" },
    { to: routes.ABOUT_US, text: "About Us" },
  ];

  return (
    <header className="text-white flex justify-center">
      <div className="container wx-auto grid grid-cols-3 mt-4">
        {/* Nav desktop */}
        <nav className="hidden space-x-6 md:flex md:items-center md:justify-center">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className="hover:font-bold">
              {link.text}
            </Link>
          ))}
        </nav>

        {/* Nav mobile */}
        <div
          className="md:hidden flex items-center justify-start ml-4"
          onClick={toggleMenu}
        >
          <button className="block p-2 md:hidden">
            <img
              src={isOpen ? hamburgerMenuClose : hamburgerMenuOpen}
              alt="Menu"
            />
          </button>
        </div>

        <div
          className="absolute w-full mt-20 bg-main md:hidden"
          onClick={toggleMenu}
        >
          <nav
            className={`${
              isOpen ? "flex border-b-2" : "hidden"
            } rounded-b-lg font-bold flex-col items-center text-center`}
          >
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} className="p-2">
                {link.text}
              </Link>
            ))}
          </nav>
        </div>

        {/* Logo */}
        <div className="flex items-center justify-center">
          <Logo color="white" />
        </div>

        {/* Login button */}
        <div className="flex items-center justify-end mr-4">
          {isAuthenticated ? (
            <button
              className="block p-3 px-6 pt-2 font-bold text-white border-2 text-center rounded-full align-baseline hover:bg-white hover:text-black"
              onClick={logout}
            >
              Logout
            </button>
          ) : (
            <Login />
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
