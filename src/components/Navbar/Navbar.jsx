import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import './Navbar.scss';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ['home', 'about', 'work', 'skills'];

  return (
    <nav className="app__navbar backdrop-blur-sm bg-opacity-80 fixed w-full z-50">
      <a href='/' className="app__navbar-logo cursor-pointer">
        <h1 className='font-bold text-3xl'>Nish<span className="text-blue-600">an</span></h1>
      </a>
      <ul className="app__navbar-links hidden md:flex">
        {navItems.map((item) => (
          <li className="app__flex p-text hover:text-blue-600 transition-colors" key={`link-${item}`}>
            <a href={`#${item}`} className="capitalize">{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu md:hidden">
        <HiMenuAlt4 onClick={() => setIsMenuOpen(true)} className="text-2xl cursor-pointer" />

        {isMenuOpen && (
          <motion.div
            className="fixed top-0 right-0 h-screen w-3/4 bg-white shadow-lg"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <HiX onClick={() => setIsMenuOpen(false)} className="text-2xl absolute top-5 right-5 cursor-pointer" />
            <ul className="h-full flex flex-col justify-center items-center">
              {navItems.map((item) => (
                <li key={item} className="my-4">
                  <a
                    href={`#${item}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-xl capitalize hover:text-blue-600 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
