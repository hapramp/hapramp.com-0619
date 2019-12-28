import React from 'react';

import Member from './Member';

import jaspreet from './img/jaspreet.jpg'

const mentors = [
  {
    name: 'Jaspreet Bindra',
    designation: '',
    link: "https://www.linkedin.com/in/jaspreetbindra/",
    pic: jaspreet
  }
];

const Mentors = () => {
  return (
    <section
      className="mentors text-center sm:text-left mt-20 px-4 sm:px-8 md:px-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl uppercase font-bold">Executive Advisor</h2>
        <div className="flex flex-wrap justify-center sm:justify-start -ml-16 mt-20">
          {mentors.map(member => {
            return (<Member key={member.link} member={member}/>)
          })
}
        </div>
      </div>
    </section>
  );
};

export default Mentors;