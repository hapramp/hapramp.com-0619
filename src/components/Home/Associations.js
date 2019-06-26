import React from 'react';

import iiitv from './img/associations/iiitv.png';
import huddle from './img/associations/huddle.png';
import nasscom from './img/associations/nascomm.png';

const associations = [
  {
    name: 'Huddle',
    link: 'http://huddle.work/',
    pic: huddle
  }, {
    name: 'Nasscom',
    link: 'Nasscom 10k Startups',
    pic: nasscom
  }, {
    name: 'IIITV',
    link: 'http://iiitvadodara.ac.in/',
    pic: iiitv
  }
]

const Associations = () => {
  return (
    <section className="mt-16 px-4 sm:px-8 md:px-10 text-center sm:text-left">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-4xl text-primary font-bold">Associations</h2>
        <div className="flex flex-wrap justify-center sm:justify-start mt-20">
          {associations.map(asso => {
            return (
              <a href={asso.link}  target="__new" className="sm:mr-8 mt-5 sm:mt-0">
                <img src={asso.pic} alt="Huddle Startup"/>
              </a>
            )
          })
}
        </div>
      </div>
    </section>
  );
};

export default Associations;