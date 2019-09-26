import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <header className="py-4 px-4 sm:px-8 md:px-10 navbar">
      <div className="max-w-5xl mx-auto flex-col md:flex-row flex md:justify-between items-center">
      <div className="md:max-w-md lg:max-w-lg">
          <h2 className="font-display text-2xl font-bold"><NavLink to="/">HAPRAMP</NavLink></h2>
          
        </div>

        <div className="mt-10 md:mt-0 md:ml-4">
          <div className="flex items-center font-bold text-grey54">
            <NavLink className="mr-6" to="/about">about us</NavLink>
            <NavLink to="/work">work with us</NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;