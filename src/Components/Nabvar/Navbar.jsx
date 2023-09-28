// import React from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiHome, FiMail, FiFileText, FiSearch } from 'react-icons/fi'; // Import icons from react-icons library

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to="/">
            <FiHome className="text-2xl" />
          </Link>
        </div>
        <div className="space-x-4 flex items-center">
          {/* <Link to="/">
            <FiHome className="text-xl" />
          </Link> */}
          <Link to="/contact">
            <FiMail className="text-xl" />
          </Link>
          <Link to="/docs">
            <FiFileText className="text-xl" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
