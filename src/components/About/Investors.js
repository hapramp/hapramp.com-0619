import React from 'react';

import Member from './Member';

const mentors = [
  {
    name: 'Anand Mahindra',
    designation: 'Chairman, Mahindra Group',
    link: "https://twitter.com/anandmahindra/",
    pic: require('./img/anand_ji.jpg')
  },
  {
    name: 'Huddle',
    designation: 'Startup Accelerator',
    link: "https://huddle.work/",
    pic: require('./img/associations/huddle.jpg')
  },
];

const Mentors = () => {
  return (
    <section
      className="text-center sm:text-left mt-10 px-4 sm:px-8 md:px-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl uppercase font-bold">Investors</h2>
        <div className="flex flex-wrap justify-center sm:justify-start sm:-ml-12 lg:-ml-12 mt-20">
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