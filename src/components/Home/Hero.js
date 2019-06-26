import React from 'react';

const Hero = () => {
  return (
    <section className="hero mt-32 sm:mt-48 mb-24 px-6 sm:px-8 md:px-10">
      <div className="max-w-5xl mx-auto">
        <div className="hero-container max-w-xl">
          <h1 className="hero-title font-display text-5xl sm:text-6xl font-bold text-primary">Meet Asteria Protocol</h1>
          <div className="hero-subtitle text-xl text-grey70 mt-4">
            New standard to treat and store data with encryption that makes privacy and security accessible to all.
          </div>
          <div className="hero-cta mt-16">
            <input className="bg-grey250 px-6 py-4 min-w-full sm:min-w-auto sm:w-96 outline-none rounded sm:rounded-r-none" type="email" placeholder="Follow the development"/>
            <input className='mt-2 sm:mt-0 w-40 sm:w-72 sm:min-w-auto sm:w-auto bg-primary text-white px-6 py-4 rounded sm:rounded-l-none cursor-pointer' value="Get Updates" type="submit"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;