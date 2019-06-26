import React, {useState} from 'react';

const Hero = () => {

  const [submitted,
    setSubmitted] = useState(false)

  return (
    <section className="hero mt-32 sm:mt-48 mb-24 px-6 sm:px-8 md:px-10">
      <div className="max-w-5xl mx-auto">
        <div className="hero-container max-w-2xl text-center sm:text-left">
          <h1
            className="hero-title font-display text-5xl sm:text-6xl font-bold text-primary">Meet Asteria Protocol</h1>
          <div className="hero-subtitle text-xl text-grey70 mt-4">
            New standard to treat and store data with encryption that makes privacy and
            security accessible to all.
          </div>
          {submitted
            ? <div className="mt-6 text-variant2 font-bold">Thank you for signing up for updates on Asteria Protocol.</div>
            : <form
              action="https://docs.google.com/forms/d/e/1FAIpQLSfzv2VtO6S7hE4KKXCAszJspfcBp3C4ZlPdEMAa6T3J69ZNkg/formResponse"
              className="hero-cta mt-16"
              onSubmit={(e)=>{e.preventDefault();setSubmitted(true)}}
              >
              <input
                name="entry.1532827602"
                className="bg-grey250 px-6 py-4 min-w-full sm:min-w-auto sm:w-84 outline-none rounded sm:rounded-r-none text-center sm:text-left"
                type="email"
                placeholder="Your Email"
                required
                />
              <input
                className='mt-2 sm:mt-0 min-w-full sm:min-w-auto sm:w-auto bg-primary text-white px-6 py-4 rounded sm:rounded-l-none cursor-pointer'
                value="Get Monthly Updates"
                type="submit"/>
            </form>
          }

        </div>
      </div>
    </section>
  );
};

export default Hero;