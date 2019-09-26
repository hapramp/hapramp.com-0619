import React from 'react';
import oneRampImg from './img/oneRamp.png'
import bg  from './img/bg-app.png';

const OneRamp = () => {
  return (
    <section className="px-0 one-ramp mt-40 text-white md:px-4">
      <div
        style={{backgroundImage:`url(${bg})`}}
        className="container bg-primary py-20 mx-auto sm:rounded-lg flex justify-center bg-cover sm:shadow-soft-lg">
        <div className="content-container text-center md:text-left mx-auto flex flex-col md:flex-row items-start md:items-center">
          <img className="self-center md:self-auto" src={oneRampImg} alt="1Ramp App"/>
          <div className="px-6 sm:px-0 mt-4 md:ml-4 md:mt-0 lg:ml-8 meta-container max-w-lg">
            <h2 className="app-title font-display text-5xl font-bold">1Ramp</h2>
            <p className="app-subtitle text-2xl mt-2">First platform on Asteria Protocol</p>
            <p className="mt-4">
              1Ramp.io is a platform that rewards content creators as they post and engage with the community. The Asteria protocol will power the data privacy and content monetization on 1Ramp.
            </p>
            <a
              href="https://1ramp.io"
              className="font-display uppercase mt-8 inline-block border-white border-b-2"
              target="__new">Visit 1Ramp.io to learn more</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OneRamp;