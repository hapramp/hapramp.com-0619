import React from 'react';
import oneRampImg from './img/oneRamp.png'
import bg  from './img/bg-app.png';

const OneRamp = () => {
  return (
    <section className="one-ramp text-white">
      <div
        style={{backgroundImage:`url(${bg})`}}
        className="container bg-primary py-20 mx-auto rounded-lg flex justify-center bg-cover">
        <div className="content-container mx-auto flex items-center">
          <img src={oneRampImg} alt="1Ramp App"/>
          <div className="ml-8 meta-container max-w-lg">
            <h2 className="app-title font-display text-5xl font-bold">1Ramp</h2>
            <p className="app-subtitle text-2xl mt-2">First platform on Asteria Protocol</p>
            <p className="mt-4">
              1Ramp.io is a platform that rewards content creators as they post and engage
              with the community. The Asteria protocol will power-up data privacy and content
              monetization on 1Ramp.
            </p>
            <a
              href="http://1ramp.io"
              className="font-display uppercase mt-8 inline-block border-white border-b-2"
              target="__new">Visit 1Ramp.io to learn more</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OneRamp;