import React from 'react';

const Phone = ({ phone, children }) => {
  return <a href={`tel:${phone}`}>{children || phone}</a>;
};

export default Phone;
