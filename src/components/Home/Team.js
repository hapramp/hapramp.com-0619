import React from 'react';

import Member from './Member';
import MemberData from './memberData';

const Team = () => {
  return (
    <section className="mt-32">
      <div className="max-w-5xl mx-auto">
        <div className="font-display text-3xl text-primary font-bold">Meet the Team</div>
        <div className="flex flex-wrap -ml-16 mt-20">
          {MemberData.map(member => {
            return (<Member member={member}/>)
          })
          }
        </div>
      </div>
    </section>
  );
};

export default Team;