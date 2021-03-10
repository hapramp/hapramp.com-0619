import React from 'react';
import wework from './img/wework.jpg';
import Team from '../About/Team';

const index = () => {
  return (
    <section className="mt-20 sm:mt-32 md:mt-40 mb-20 sm:mb-32 md:mb-40 px-6 sm:px-8 md:px-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-2xl sm:text-3xl">
          <p>We are a passionate bunch of people building the tech solutions for the future of passion economy. Join us on this journey to make an impact!</p>
        </div>
        <div className="text-xl sm:text-2xl md:text-3xl font-display"><a rel="noopener noreferrer" className="mt-8 inline-block underline font-bold" href="https://angel.co/company/hapramp/jobs" target="_blank">See open roles</a></div>

        <Team />

        <div className="sm:mt-8 md:mt-12">
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
          <img className="mt-8 md:mt-16" src={wework} alt="Huddle Coworking Space" />
          <a className="mt-4 inline-block underline text-lg" href="https://goo.gl/maps/yJnBB8DhCvsGfwiB6" target="_new">Office Location: WeWork, Platina Tower, MG Road, Gurugram, 122002 (India)</a>
        </div>
      </div>

    </section>
  );
};

export default index;