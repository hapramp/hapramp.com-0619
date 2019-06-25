import React from 'react';

const Hero = () => {
  return (
    <section className="hero my-48">
      <div className="max-w-5xl mx-auto">
        <div className="hero-container max-w-xl">
          <h1 className="hero-title font-display text-6xl font-bold text-primary">Meet Asteria Protocol</h1>
          <div className="hero-subtitle text-xl text-grey70 mt-4">
            New standard to treat and store data with encryption that makes privacy and security accessible to all.
          </div>
          <div className="hero-cta mt-16">
            <input className="bg-grey250 px-6 py-4 w-96 outline-none rounded rounded-r-none" type="email" placeholder="Follow the development"/>
            <input className='bg-primary text-white px-6 py-4 rounded rounded-l-none' value="Get Updates" type="submit"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;