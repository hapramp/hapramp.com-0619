import React from 'react';

const Member = (props) => {
  const {member} = props;
  return (
    <a href={member.link} className="w-1/2 sm:w-1/3 lg:w-1/4 flex flex-col items-center mb-16" target="_blank" rel="noopener noreferrer">
      <img src={member.pic} alt="" className="rounded-full w-32"/>
      <h3 className="font-display text-xl mt-4">{member.name}</h3>
      <div className="mt-1 text-sm max-w-xs text-center">{member.designation}</div>
    </a>
  );
};

export default Member;