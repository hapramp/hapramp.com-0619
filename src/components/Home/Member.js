import React from 'react';

const Member = (props) => {
  const {member} = props;
  return (
    <a href={member.link} className="max-w-sm flex flex-col items-center mb-16 ml-16" target="__new">
      <img src={member.pic} alt="" className="rounded-full w-48"/>
      <h3 className="font-display text-2xl mt-4">{member.name}</h3>
      <div className="mt-1">{member.designation}</div>
    </a>
  );
};

export default Member;