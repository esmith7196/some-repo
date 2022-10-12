import React from 'react';
import Link from 'next/link';

const CTA = ({ children, url, primaryFilled, unset, classList }) => {
  const isExternalURL = url.toLowerCase().includes('.com');
  const target = isExternalURL ? '_blank' : '';

  const retrieveStyle = () => {
    if (primaryFilled) {
      return 'bg-primary font-body text-dark px-12 py-4 border-2 border-primary hover:text-primary hover:bg-dark hover:text-white text-lg uppercase font-normal  transition-all duration-1000 ';
    }
    if (unset) {
      return '';
    }
    return 'bg-transparent  px-12 py-2 border-2 border-dark font-body text-white hover:border-white  hover:text-white transition-all duration-1000 ';
  };

  const style = retrieveStyle();

  return (
    <Link href={url} className="">
      <a
        rel={target.length ? 'noopener noreferrer' : ''}
        target={target}
        className={style}
      >
        {children}
      </a>
    </Link>
  );
};

export default CTA;
