import React from 'react';
import { Link } from 'react-router-dom';

import gosocial from './img/gosocial.jpg'
import oneramp from './img/1ramp.jpg';
import asteria from './img/asteria.jpg';

const Products = () => {
  return (
    <section className="products px-4 sm:px-8 md:px-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl uppercase font-bold">From Hapramp with <span role="img" aria-label="Love Emoji">❤️</span></h2>
        {/* Go Social App */}
        <div className="md:flex mt-10 sm:mt-12 md:mt-16 border-b pb-10">
          <img src={gosocial} alt="Go Social App Logo" />
          <div className="md:ml-12">
            <h3 className="text-4xl font-display mt-4 md:mt-0">GoSocial</h3>
            <p className="mt-4 text-lg">Empowering individuals and creators to turn their passion into income. GoSocial’s creator stack gives you the freedom to do more with your passion.</p>
            <div>Available on <a className="mt-8 inline-block underline font-bold" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.go.social.prod&hl=en_IN" target="_blank">Android</a></div>
          </div>
        </div>

        {/* Flips */}
        <div className="md:flex mt-16 border-b pb-10">
          <img src={require('./img/flips.jpg')} alt="1ramp App Logo" />
          <div className="md:ml-12">
            <h3 className="text-4xl font-display mt-4 md:mt-0">Flips</h3>
            <p className="mt-4 text-lg">Flips is a tool for writers that enables you to turn your poems, quotes, and tales into aesthetic looking posts and stories.</p>
            <div>Available on <a className="mt-8 inline-block underline font-bold" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.gosocial.flips&ref=producthunt" target="_blank">Android</a> and <a rel="noopener noreferrer" className="mt-8 inline-block underline font-bold" href="https://alpha.1ramp.io" target="_blank">Web</a></div>
          </div>
        </div>

        {/* 1ramp.io */}
        <div className="md:flex mt-16 border-b pb-10">
          <img src={oneramp} alt="1ramp App Logo" />
          <div className="md:ml-12">
            <h3 className="text-4xl font-display mt-4 md:mt-0">1Ramp.io</h3>
            <p className="mt-4 text-lg">Social media platform for creative communities. Where creators earn cryptocurrency for every like they get. Powered by <a className="font-bold underline" href="https://steem.com">Steem</a> Blockchain.</p>
            <div>Available for <a className="mt-8 inline-block underline font-bold" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.hapramp&hl=en_IN" target="_blank">Android</a> and <a rel="noopener noreferrer" className="mt-8 inline-block underline font-bold" href="https://alpha.1ramp.io" target="_blank">Web</a></div>
          </div>
        </div>

        {/* Asteria */}
        <div className="md:flex mt-16 pb-10">
          <img src={asteria} alt="Asteria App Logo" />
          <div className="md:ml-12">
            <h3 className="text-4xl font-display mt-4 md:mt-0">Asteria Protocol</h3>
            <p className="mt-4 text-lg">New standard to treat and store user data that makes privacy and security accessible to all.</p>
            <Link className="mt-8 inline-block underline font-bold" to="/asteria" target="_blank">LEARN MORE</Link>
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