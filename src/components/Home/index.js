import React from 'react';
import './Hero';
import Hero from './Hero';
import Feature from './Feature'
import Quote from './Quote'
import OneRamp from './OneRamp'
import Team from './Team'
import Mentors from './Mentors'
import Associations from './Associations'
import Hiring from './Hiring'

const index = () => {
  return (
   <main>
     <Hero />
     <Feature />
     <Quote />
     <OneRamp />
     <Team />
     <Mentors />
     <Associations />
     <Hiring />
   </main>
  );
};

export default index;