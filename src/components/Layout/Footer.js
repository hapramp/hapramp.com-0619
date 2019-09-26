import React from 'react';

import linkedIn from './img/social/linkedin.svg';
import twitter from './img/social/twitter.svg';
import medium from './img/social/medium.svg';

const Footer = () => {
  return (
    <footer className="bg-black py-6 text-white px-4 sm:px-8 md:px-10">
      <div className="max-w-4xl mx-auto flex-col md:flex-row flex md:justify-between items-center">
        <div className="md:max-w-md lg:max-w-lg">
          <h2 className="font-display text-4xl font-bold">HAPRAMP STUDIO</h2>
        </div>

        <div className="mt-10 md:mt-0 md:ml-4">
          <div className="flex items-center">
            <a href="mailto:hi@hapramp.com" className="mr-6">hi@hapramp.com</a>
            <a href="https://twitter.com/hapramp" className="mr-6"  target="__new"><img src={twitter} alt="Twiiter Social Icon"/></a>
            <a href="https://www.linkedin.com/company/hapramp/"  className="mr-6" target="__new"><img src={linkedIn} alt="LinkedIn Social Icon"/></a>
            <a href="https://medium.com/hapramp" target="__new"><img src={medium} alt="Medium Social Icon"/></a>
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;