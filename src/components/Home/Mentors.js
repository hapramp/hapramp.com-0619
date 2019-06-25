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
    <section className="mentors mt-20">
      <div className="max-w-5xl mx-auto">
        <div className="font-display text-3xl text-primary font-bold">Mentor</div>
        <div className="flex flex-wrap -ml-16 mt-20">
          {mentors.map(member => {
            return (<Member member={member}/>)
          })
}
        </div>
      </div>
    </section>
  );
};

export default Mentors;