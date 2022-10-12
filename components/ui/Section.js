import React from 'react';

const Section = ({ children, bg = 'background', small }) => {
  if (small) {
    return <section className={`py-5 px-2 bg-${bg}`}>{children}</section>;
  }
  return <section className={`py-12 px-6 bg-${bg}`}>{children}</section>;
};

export default Section;
