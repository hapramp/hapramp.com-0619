import React from 'react';

import illustration from './img/hiring.svg';

const hiringData = [
  {
    position: 'UI/UX Designer',
    link: 'https://linkedin.com/mynetwork/'
  }, {
    position: 'HR Manager',
    link: 'https://linkedin.com/mynetwork/'
  }, {
    position: 'Illustrator',
    link: 'https://linkedin.com/mynetwork/'
  }
]

const Hiring = () => {
  return (
    <section className="hiring mt-32 z-10 relative">
      <div
        className="container flex bg-white mx-auto rounded-lg flex bg-cover shadow-soft-lg justify-between px-24 py-20 ">
        <div className="mr-8 meta-container max-w-xl">
          <h2 className="font-display text-4xl text-primary font-bold">We’re hiring</h2>
          <div className="mt-10">
            {hiringData.map(data => {
              return (
                <a
                  href={data.link}
                  className='uppercase bg-white text-primary px-6 py-4 mt-8 rounded cursor-pointer inline-block border border-primary border-dashed mr-8'
                  value="Get Updates">
                  {data.position}
                </a>
              )
            })
}
          </div>
          <a
            href="!#"
            className='bg-primary text-white px-6 py-4 mt-8 rounded cursor-pointer inline-block'
            value="Get Updates">
            Apply on Angelist
          </a>
        </div>
        <img className="max-w-xs" src={illustration} alt="1Ramp App"/>
      </div>
    </section>
  );
};

export default Hiring;