import React, { useState } from 'react';
import SocialLInks from '../ui/SocialLinks';
import {
  primaryColor,
  routes,
  hardCodedAddressText,
  hardCodedAddressURL,
} from 'config';
import Link from 'next/link';
import HoursDisplay from 'components/hours/hoursDisplay';

const Footer = ({ business, shoutData }) => {
  const [displayShout, setDisplayShout] = useState(false);
  const { links, phone } = business;
  const footerClassList =
    'static md:fixed bottom-0 right-0 left-0 bg-dark p-2 px-4 z-20 justify-between text-white font-body  md:flex items-center md:max-h-[52px] border-t-2 border-primary mb-52 md:mb-0';
  const linkClassList = 'hover:text-primary transition-all duration-1000';

  const renderFooterNavItems = () => {
    return routes
      .filter(route => route.inFooter)
      .map(itm => (
        <span key={itm.url} className="hidden lg:inline ml-4  ">
          <Link href={itm.url}>
            <a
              className="px-3 bg-primary font-normal border-2 border-primary hover:text-primary transition-all duration-500 text-dark py-1 hover:bg-transparent hover:text-white"
              target={'_blank'}
            >
              {itm.name}
            </a>
          </Link>
        </span>
      ));
  };

  return (
    <>
      <div className="flex justify-center py-12 md:py-12 px-5">
        <img
          src="/logo.png"
          alt={business.name}
          className="max-w-lg w-full m-aut"
        />
      </div>
      <div className="pb-8">
        <HoursDisplay hours={business.hours} isContact center />
      </div>

      <div className={footerClassList}>
        <div className="left items-start hidden md:flex">
          <img
            className="h-[20px]"
            src="/gn-power-black.svg"
            alt="Powered By GoNation"
          />
          {/* {renderFooterNavItems()} */}
        </div>
        <div className="right flex justify-center items-center md:flex-end">
          <div className="text-sm ">
            <a
              target={'_blank'}
              className={`${linkClassList} mb-5`}
              rel="noopener noreferrer"
              href={hardCodedAddressURL}
            >
              {hardCodedAddressText}
            </a>
            <div className="px-5 inline">|</div>
            <a href={phone} className={linkClassList}>
              {phone}
            </a>
          </div>
          <div className="px-5 hidden md:inline">|</div>

          <SocialLInks links={links} fill={primaryColor} />
        </div>
      </div>
    </>
  );
};

export default Footer;
