import React from 'react';

const Quote = () => {
  return (
    <section className="quote mt-40 px-6 sm:px-8 md:px-10">
      <div className="max-w-4xl mx-auto font-light text-4xl">
        <span className="">
          <svg width="117" height="107" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M116.943 106.201H71.777c0-39.55 2.035-66.69 6.104-81.42C81.95 10.05 90.983 1.79 104.98 0l6.591 13.428c-5.696 1.79-10.457 4.923-14.282 9.4-3.825 4.475-6.47 9.52-7.935 15.136-1.464 5.615-2.44 10.213-2.93 13.794a79.417 79.417 0 0 0-.732 10.742h31.25v43.701zm-71.777 0H0c0-39.55 2.034-66.69 6.104-81.42C10.173 10.05 19.206 1.79 33.204 0l6.59 13.428c-5.696 1.79-10.456 4.923-14.281 9.4-3.825 4.475-6.47 9.52-7.935 15.136-1.465 5.615-2.441 10.213-2.93 13.794a79.417 79.417 0 0 0-.732 10.742h31.25v43.701z"
              fill="#000"
              fillRule="nonzero"
              fillOpacity=".175"/>
          </svg>
        </span>
        <span className="-mt-8 ml-8 inline-block">
          Your data is more worth than you might expect, in the future, it might become
          your lifeline.<a href="https://en.wikipedia.org/wiki/Jaron_Lanier" className="font-display font-bold" target="__new">
            — Jaron Lanier</a>
        </span>
      </div>
    </section>
  );
};

export default Quote;