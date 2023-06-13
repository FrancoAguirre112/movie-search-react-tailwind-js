import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import hamburgerMenuOpen from '../assets/hamburgerMenuOpen.svg';
import hamburgerMenuClose from '../assets/hamburgerMenuClose.svg';
import Modal from './Modal';
import Login from '../pages/Login';
import { useAuthContext } from '../contexts/authContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const { logout, isAuthenticated } = useAuthContext();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <header className="text-white flex justify-center">
      <div className="container wx-auto grid grid-cols-3 mt-4">

        {/* Nav desktop */}
        <nav className="hidden space-x-6 md:flex md:items-center md:justify-center">
          <Link to="/search" className="hover:font-bold">
            Search
          </Link>
          <Link to="/favorites" className="hover:font-bold">
            Favorites
          </Link>
          <Link to="/about" className="hover:font-bold">
            About Us
          </Link>
        </nav>

        {/* Nav mobile */}
        <div className="md:hidden flex items-center justify-start ml-4" onClick={toggleMenu}>
          <button className="block p-2 md:hidden">
            <img src={isOpen ? hamburgerMenuClose : hamburgerMenuOpen} alt="Menu" />
          </button>
        </div>

        <div className="absolute w-full mt-20 bg-main md:hidden" onClick={toggleMenu}>
          <nav className={`${isOpen ? 'flex border-b-2' : 'hidden'} rounded-b-lg font-bold flex-col items-center text-center`}>
                  <Link to="/favorites" className='p-2'>Favorites</Link>
                  <Link to="/about" className='p-2'>About Us</Link>
                  <Link to="/search" className='p-2'>Search</Link>
          </nav>
        </div>
        

        {/* Logo */}
        <div className='flex items-center justify-center'>
          <Logo color="white" />
        </div>

        {/* Login button */}
        <div className='flex items-center justify-end mr-4'>
          {isAuthenticated ? (<button
          className="block p-3 px-6 pt-2 font-bold text-white border-2 text-center rounded-full align-baseline hover:bg-white hover:text-black"
          onClick={logout}
        >
          Logout
        </button>) : (<Login />)}

        </div>
      </div>
        
    </header>
  );
};

export default Navbar;
