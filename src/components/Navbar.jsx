import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo.jsx';
import hamburgerMenuOpen from '../assets/hamburgerMenuOpen.svg';
import hamburgerMenuClose from '../assets/hamburgerMenuClose.svg';
import SearchBtn from './SearchBtn';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="relative container mx-auto">
      <div className="flex items-center justify-between p-4">
        <Logo color="black" />

        <div className="hidden space-x-6 md:flex">
          <Link to="/favorites" className="w-[fit-content] hover:font-bold">
            Favorites
          </Link>
          <Link to="/about" className="w-[fit-content] hover:font-bold">
            About Us
          </Link>
        </div>

        <div>
          <SearchBtn />

          <button
            id="menu-btn"
            className="block hamburger md:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            <img src={isOpen ? hamburgerMenuClose : hamburgerMenuOpen} />
          </button>
        </div>
      </div>

      <div className="md:hidden">
        <div
          id="menu"
          className={`${
            isOpen ? 'flex' : 'hidden'
          } absolute w-full flex-col items-center self-end py-5 pt-5 space-y-5 font-bold bg-white  sm:self-center drop-shadow-sm`}
        >
          <a href="/favorites">Favorites</a>
          <a href="/about">About Us</a>
        </div>
        <SearchBtn className="flex" />
      </div>
    </header>
  );
};

export default Navbar;
