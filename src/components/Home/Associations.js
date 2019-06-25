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

const Associations = () => {
  return (
    <section className="team mt-20">
      <div className="team-container max-w-5xl mx-auto">
        <div className="section-title font-display text-3xl text-primary font-bold">Mentor</div>
        <div className="team-member-container flex flex-wrap -ml-16 mt-20">
          {mentors.map(member => {
            return (<Member member={member}/>)
          })
}
        </div>
      </div>
    </section>
  );
};

export default Associations;