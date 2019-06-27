import React from 'react';

import illustration from './img/hiring.svg';

const hiringData = [
  {
    position: 'Frontend Engineer',
    link: 'https://docs.google.com/document/d/1GnOUghgOTPTGV8EO2Z__-2LmMfreTpcXCcIAYiRtdYE/edit?usp=sharing)'
  }
]

const Hiring = () => {
  return (
    <section className="hiring text-center sm:text-left mt-32 z-10 relative px-6 md:px-4">
      <div
        className="container flex flex-col md:flex-row bg-white mx-auto sm:rounded-lg flex bg-cover sm:shadow-soft-lg justify-between sm:px-24 sm:py-20 ">
        <div className="md:mr-8 meta-container max-w-xl">
          <h2 className="font-display text-4xl text-primary font-bold">We’re hiring</h2>
          <div className="mt-10">
            {hiringData.map(data => {
              return (
                <a
                  href={data.link}
                  className='uppercase bg-white text-primary px-6 py-4 mt-8 rounded cursor-pointer inline-block border border-primary border-dashed mr-2 ml-2 sm:mr-8 sm:ml-0'
                  value="Get Updates"
                  target="__new"
                  key={data.link}
                  >
                  {data.position}
                </a>
              )
            })
}
          </div>
          <a
            href="https://angel.co/company/hapramp/jobs"
            className='bg-primary text-white px-6 py-4 mt-8 rounded cursor-pointer inline-block'
            value="Get Updates"
            target="__new"
            >
            Apply on AngelList
          </a>
        </div>
        <img className="hidden lg:inline-block md:w-64 lg:max-w-xs lg:w-84" src={illustration} alt="1Ramp App"/>
      </div>
    </section>
  );
};

export default Hiring;