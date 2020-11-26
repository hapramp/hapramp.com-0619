import React from 'react';
import wework from './img/wework.jpg';

const index = () => {
  return (
    <section className="mt-20 sm:mt-32 md:mt-40 mb-20 sm:mb-32 md:mb-40 px-6 sm:px-8 md:px-10 mb-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-xl sm:text-2xl">
          <p>We started Hapramp in the final year of our college in 2018 with a mission to empower creators.</p>
          <p className="mt-8">We believe if we build solutions that enable people to take control of their data and earn a fair fraction from its monetary value -- it’ll change the lives of billions.</p>
          <p className="mt-8">Currently, we are building <a className="font-bold underline" href="https://gosocial.io" target="_blank" rel="noopener noreferrer">GoSocial</a>. And we are looking for engineers, problem solvers, and creators to get along with us on this journey.</p>
        </div>

        <div className="mt-20 sm:mt-24 md:mt-32">
          <h2 className="text-xl uppercase font-bold">Perks:</h2>
          <div className="-ml-10 flex flex-wrap mt-8">
            <div className="sm:w-1/2 md:w-1/3 pl-10 mb-10">
              <h3 className="text-lg font-bold">Food is on the house</h3>
              <p>There’s always good food around to munch. And everyone is allowed to add their favorite snack to our Amazon cart.</p>
            </div>
            <div className="sm:w-1/2 md:w-1/3 pl-10 mb-10">
              <h3 className="text-lg font-bold">Books and Courses</h3>
              <p>Get access to our in-house library, order books of your choice, or enroll in online courses to learn new things.</p>
            </div>
            <div className="sm:w-1/2 md:w-1/3 pl-10 mb-10">
              <h3 className="text-lg font-bold">Team Outings</h3>
              <p>Once in a while we try to spend time together outside of work to make more room for life in a tight work-life balance tussle.</p>
            </div>
            <div className="sm:w-1/2 md:w-1/3 pl-10 mb-10">
              <h3 className="text-lg font-bold">Work from home</h3>
              <p>We embrace the work-from-anywhere culture. Work from office or home or anywhere, forever.</p>
            </div>
            <div className="sm:w-1/2 md:w-1/3 pl-10 mb-10">
              <h3 className="text-lg font-bold">Access workspace anywhere</h3>
              <p>Get the access cards for WeWork and work from anywhere in the world.</p>
            </div>
            <div className="sm:w-1/2 md:w-1/3 pl-10 mb-10">
              <h3 className="text-lg font-bold">Health Insurance</h3>
              <p>Get reimbursement upto 10k on your health or term insurance.</p>
            </div>
         </div>
        </div>

        <div>
          <img className="mt-8 md:mt-16" src={wework} alt="Huddle Coworking Space"/>
          <a className="mt-4 inline-block underline text-lg" href="https://goo.gl/maps/yJnBB8DhCvsGfwiB6" target="_new">Office Location: WeWork, Platina Tower, MG Road, Gurugram, 122002 (India)</a>
        </div>
        <div className="text-xl sm:text-2xl md:text-3xl font-display">See open roles on <a rel="noopener noreferrer" className="mt-8 inline-block underline font-bold" href="https://angel.co/company/hapramp/jobs" target="_blank">AngelList</a> or <a rel="noopener noreferrer" className="mt-8 inline-block underline font-bold" href="https://www.linkedin.com/company/hapramp/jobs" target="_blank">LinkedIn</a></div>
      </div>
      
    </section>
  );
};

export default index;