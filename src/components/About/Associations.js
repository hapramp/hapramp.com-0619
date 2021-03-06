import React from 'react';

import iiitv from './img/associations/iiitv.png';
import nasscom from './img/associations/nascomm.png';

const associations = [{
    name: 'Nasscom',
    link: 'http://www.10000startups.com/',
    pic: nasscom
  }, {
    name: 'IIITV',
    link: 'http://iiitvadodara.ac.in/',
    pic: iiitv
  }
]

const Associations = () => {
  return (
    <section className="mt-10 px-4 sm:px-8 md:px-10 text-center sm:text-left mb-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl uppercase font-bold">Associations</h2>
        <div className="flex flex-wrap justify-center sm:justify-start mt-20">
          {associations.map(asso => {
            return (
              <a key={asso.link} href={asso.link}  target="__new" className="sm:mr-8 mt-5 sm:mt-0">
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