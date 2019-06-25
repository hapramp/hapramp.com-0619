import React from 'react';

const Feature = () => {
  return (
    <section className="feature bg-grey250 py-20">

      <div className="card-container flex overflow-x-auto">
        {/* Card 1 */}
        <div
          className="feat-card p-10 bg-primary max-w-md min-w-120 text-white rounded">
          <h2 className='card-title font-display text-3xl'>Asteria is for Applications</h2>
          <div className="card-body mt-6">
            <p>
              Every application that deals with user data must ensure security and privacy.
              But there is no standard for the platforms to provide provable privacy. The only
              choice users have is to trust the app.
            </p>

            <p className='mt-4'>Asteria changes that with open-source (trustless) data
              handling standards and encryption. By storing the user’s data on Asteria
              protocol any application can instantly bring privacy and security to their
              users.
            </p>
          </div>
        </div>

        {/* card 2 */}
        <div
          className="feat-card p-10 bg-variant1 max-w-md min-w-120 text-white ml-6 rounded">
          <h2 className='card-title font-display text-3xl'>Privacy Can Be Simple</h2>
          <div className="card-body mt-6">
            <p>
              We simplified privacy by design. The user data is encrypted and they choose who
              gets access to which data. Also, security and privacy are verifiable, not even
              the application owners can access data without explicit permissions from users.
            </p>

            <p className='mt-4'>We are equipping Asteria with Blockchain to store all the
              interactions on user data (data access logs). The logs remain immutable and
              every user can see which data was accessed (when) and can change permissions as
              they wish.

            </p>
          </div>
        </div>

        <div
          className="feat-card p-10 bg-variant2 max-w-md min-w-120 text-white mx-6 rounded">
          <h2 className='card-title font-display text-3xl'>Every App Can Monetize Data</h2>
          <div className="card-body mt-6">
            <p>
              This is a tiny step towards a fair information economy where users earn for the
              value their data has for the Internet platforms.
            </p>

            <p className='mt-4'>User-generated data is their property. And we believe a fair
              monetary compensation (if data gets monetized) is fundamental, just like
              privacy. Asteria can help platforms associate a monetary value to the
              individual’s data.
            </p>
          </div>
        </div>

        <div className='p-2'></div>
      </div>
    </section>
  );
};

export default Feature;