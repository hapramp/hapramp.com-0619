import React from 'react';

import linkedIn from './img/social/linkedin.svg';
import twitter from './img/social/twitter.svg';

const Footer = () => {
  return (
    <footer className="bg-primary pt-56 pb-24 -mt-24 z-0 relative text-white">
      <div className="max-w-5xl mx-auto flex justify-between">
        <div className="max-w-lg">
          <h2 className="font-display text-5xl font-bold">HAPRAMP STUDIO</h2>
          <p className="mt-4">
            Hapramp Studio is an Internet company working on the Internet’s biggest
            challenges; data privacy, security, and content monetization. We are building
            the Asteria protocol, a standard for securely and privately treating and storing
            user data. 1Ramp.io (where creators earn on their content) is the first platform
            to utilize Asteria for privacy and fair content monetization.
          </p>
          <p className="text-xl mt-8">
            Huddle.work, Tower B, Building No. 5 DLF Cyber City, Gurugram, India
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-display font-bold">Useful links</h3>
          <div className="flex flex-col mt-4 text-xl">
            <a href="#" className="mb-2">Privacy Policy</a>
            <a href="#">1Ramp.io</a>
          </div>
        </div>

        <div>
          <div className="flex">
            <a href="#" className="mr-6"><img src={twitter} alt="Twiiter Social Icon"/></a>
            <a href="#"><img src={linkedIn} alt="LinkedIn Social Icon"/></a>
          </div>
          <div className="flex flex-col mt-4 text-xl">
            <a href="mailto:hi@hapramp.com" className="mb-2">hi@hapramp.com</a>
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;