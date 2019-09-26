import React from 'react';
import {Link} from 'react-router-dom';

import gosocial from './img/gosocial.jpg'
import oneramp from './img/1ramp.jpg';
import asteria from './img/asteria.jpg';

const Products = () => {
  return (
    <section className="products">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl uppercase font-bold">Ideas we are working on</h2>
        {/* Go Social App */}
        <div className="flex mt-16 border-b pb-10">
          <img src={gosocial} alt="Go Social App Logo"/>
          <div className="md:ml-12">
            <h3 className="text-4xl font-display">Go.Social</h3>
            <p className="mt-4 text-lg">Inspiring humans to take on a digital journey of their lifetime. A platform where you learn, explore, create, and grow as a creative individual.</p>
            <a className="mt-8 inline-block underline font-bold" href="https://gosocialapp.co" target="_new">LET’S GO</a>
          </div>
        </div>

        {/* 1ramp.io */}
        <div className="flex mt-16 border-b pb-10">
          <img src={oneramp} alt="1ramp App Logo"/>
          <div className="md:ml-12">
            <h3 className="text-4xl font-display">1Ramp.io</h3>
            <p className="mt-4 text-lg">Social media platform for creative communities. Where creators earn cryptocurrency for every like they get. Powered by <a className="font-bold underline" href="https://steem.com">Steem</a> Blockchain.</p>
            <div>Available for <a className="mt-8 inline-block underline font-bold" href="https://gosocialapp.co" target="_new">Android</a> and <a className="mt-8 inline-block underline font-bold" href="https://gosocialapp.co" target="_new">Web</a></div>
          </div>
        </div>

        {/* Asteria */}
        <div className="flex mt-16 pb-10">
          <img src={asteria} alt="Asteria App Logo"/>
          <div className="md:ml-12">
            <h3 className="text-4xl font-display">Asteria Protocol</h3>
            <p className="mt-4 text-lg">New standard to treat and store user data that makes privacy and security accessible to all.</p>
            <a className="mt-8 inline-block underline font-bold" href="https://gosocialapp.co" target="_new">LEARN MORE</a>
          </div>
        </div>

        {/* Link Group */}
        <div className="text-3xl font-display font-bold mb-20">
          <Link className="mr-8 hover:underline" to="/about">about us</Link>
          <Link className="hover:underline" to="/work">work with us</Link>
        </div>
      </div>
    </section>
  );
};

export default Products;