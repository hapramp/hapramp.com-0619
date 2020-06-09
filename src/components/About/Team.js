import React from 'react';

import Member from './Member';
import MemberData from './memberData';

const Team = () => {
  return (
    <section className="text-center sm:text-left mt-20 sm:mt-32 md:mt-40 px-4 sm:px-8 md:px-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl uppercase font-bold">Meet the Team</h2>
        <div className="flex flex-wrap justify-center sm:justify-start sm:-ml-12 lg:-ml-12 mt-20">
          {MemberData.map(member => {
            return (<Member key={member.link} member={member}/>)
          })
}
        </div>
      </div>
    </section>
  );
};

export default Team;