import React from 'react';
import huddle from './img/huddle.jpg';

const index = () => {
  return (
    <section className="mt-40 px-6 sm:px-8 md:px-10 mb-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-2xl">
          <p>We started Hapramp in the final year of our college in 2018 with a mission to empower creators.</p>
          <p className="mt-8">We believe if we build solutions that enable people to take control of their data and earn a fair fraction from its monetary value -- it’ll change the lives of billions.</p>
          <p className="mt-8">Currently, our solutions are a work-in-progress. And we are looking for engineers, problem solvers, and creators to get along with us on this journey.</p>
        </div>

        <div>
          <img className="mt-16" src={huddle} alt="Huddle Coworking Space"/>
          <a className="mt-4 inline-block underline text-lg" href="https://goo.gl/maps/1ACy94KcPCQoc35NA" target="_new">Office Location: Huddle.Work, Building no. 5, DLF Cyber City, Gurugram.</a>
        </div>
        <div className="text-3xl font-display">See open roles on <a className="mt-8 inline-block underline font-bold" href="https://gosocialapp.co" target="_new">AngelList</a> or <a className="mt-8 inline-block underline font-bold" href="https://gosocialapp.co" target="_new">LinkedIn</a></div>
      </div>
      
    </section>
  );
};

export default index;