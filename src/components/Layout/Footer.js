import React from 'react';

import linkedIn from './img/social/linkedin.svg';
import twitter from './img/social/twitter.svg';
import medium from './img/social/medium.svg';

const Footer = () => {
  return (
    <footer className="bg-black py-6 text-white px-4 sm:px-8 md:px-10">
      <div className="max-w-4xl mx-auto flex-col sm:flex-row flex sm:justify-between items-center">
        <div className="md:max-w-md lg:max-w-lg">
          <h2 className="font-display text-3xl md:text-4xl font-bold">HAPRAMP STUDIO</h2>
        </div>

        <div className="mt-6 sm:mt-0">
          <div className="flex items-center">
            <a href="mailto:hi@hapramp.com" className="mr-6">hi@hapramp.com</a>
            <a rel="noopener noreferrer" href="https://www.instagram.com/hapramp/" className="mr-6" target="_blank">
              <svg width="24" height="24">
              <path fill="white" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162S8.597 18.163 12 18.163s6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zM12 16c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg></a>
            <a rel="noopener noreferrer" href="https://twitter.com/hapramp" className="mr-6" target="_blank"><img src={twitter} alt="Twiiter Social Icon" /></a>
            <a rel="noopener noreferrer" href="https://www.linkedin.com/company/hapramp/" className="mr-6" target="_blank"><img src={linkedIn} alt="LinkedIn Social Icon" /></a>
            <a rel="noopener noreferrer" href="https://medium.com/hapramp" target="_blank"><img src={medium} alt="Medium Social Icon" /></a>
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;