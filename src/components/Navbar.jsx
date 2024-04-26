
import { Link } from 'react-router-dom';
import { FaBars,   FaPowerOff } from 'react-icons/fa';


import { useState } from'react';

const Navbar = () => {
  const [isMainMenuOpen, setMainMenuOpen] = useState(false);

  const toggleMainMenu = () => {
    setMainMenuOpen(!isMainMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-gray-900" style={{ backgroundColor: '#242424' }}> 
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3">
          <FaBars className="text-white" onClick={toggleMainMenu} />
          <span className="text-2xl font-semibold text-white">Vic-Engine</span>
        </Link>
        <div className="flex-grow flex justify-center">
          <div className={`md:flex items-center space-x-3 ${isMainMenuOpen ? 'block' : 'hidden'}`}>
            <Link to="/" className="text-white hover:text-gray-300 flex items-center">
             
              <span className="ml-1">Home</span>
            </Link>
            <Link to="/about" className="text-white hover:text-gray-300 flex items-center">
              <span>About</span>
            </Link>
          
          
            <Link to="/team" className="text-white hover:text-gray-300 flex items-center">
             
              <span className="ml-1">Team</span>
            </Link>
            <Link to="/contact" className="text-white hover:text-gray-300 flex items-center">
             
              <span className="ml-1">Contact</span>
            </Link>
            <Link to="/signup" className="text-white hover:text-gray-300 flex items-center">
            
              <span className="ml-1">Sign Up</span>
            </Link>

            <Link to="/search" className="text-white hover:text-gray-300 flex items-center">
              <FaPowerOff className="inline-block" />
              <span className="ml-1">Search</span>
            </Link>
          </div>
        </div>
        <div id="search-bar" className="w-120 bg-[#303030] rounded-md shadow-lg z-10">
    <form className="flex items-center justify-center p-2">
        <input type="text" placeholder="Search here"
            className="w-full rounded-md px-2 bg-[#303030] py-1 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" style={{ border:"none" }} />
        <button type="submit"
            className="bg-[yellowgreen] text-white rounded-md px-4 py-1 ml-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50">
            Search
        </button>
    </form>
</div>
      </div>
    </nav>
  );
};

export default Navbar;
