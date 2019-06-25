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
    <section className="mt-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-4xl text-primary font-bold">Associations</h2>
        <div className="flex flex-wrap mt-20">
          {associations.map(asso => {
            return (
              <a href={asso.link}  target="__new" className="mr-8">
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