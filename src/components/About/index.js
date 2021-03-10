import React from 'react';
import Mentors from './Mentors';
import Investors from './Investors';
import Associations from './Associations';

const index = () => {
  return (
    <>
      <section className="mt-20 sm:mt-32 md:mt-40 mb-20 sm:mb-32 md:mb-40 px-6 sm:px-8 md:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-xl sm:text-2xl">
            <p>We started Hapramp in 2018 with a mission to empower creators.</p>
            <p className="mt-8">We believe if we build solutions that enable people to take control of their data, earn a fair fraction from its monetary value, and make a living off their passion, it’ll change the lives of billions.</p>
            <p className="mt-8">Currently we are focused on building <a className="font-bold underline" href="https://gosocial.io" target="_blank" rel="noopener noreferrer">GoSocial</a>. And we are looking for engineers, problem solvers, and creators to get along with us on this journey.</p>
          </div>
        </div>
      </section>
      <Mentors />
      <Investors />
      <Associations />
    </>
  );
};

export default index;