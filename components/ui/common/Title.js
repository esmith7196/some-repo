import React from 'react';

const Title = ({ children, classList }) => {
  return (
    <h3 className={`${classList} font-display text-3xl text-left `}>
      {children}
    </h3>
  );
};

export default Title;
