import React from 'react';

const Button = ({ children, link = '#', fill }) => {
  if (fill) {
    return (
      <button className="bg-primary px-8 py-3  text-dark font-semibold uppercase text-lg border-2 border-dark hover:bg-primary hover:text-white transition-all duration-500 w-full">
        <a href={link}>{children}</a>
      </button>
    );
  }
  return (
    <button className="bg-primary px-8 py-3 rounded-sm text-white font-semibold uppercase text-lg border-2 border-primary hover:bg-transparent hover:text-primary transition-all duration-500">
      <a href={link}>{children}</a>
    </button>
  );
};

export default Button;
