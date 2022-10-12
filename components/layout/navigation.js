import React, { useState, useEffect } from 'react';
import slugify from 'slugify';
import Link from 'next/link';

import { motion } from 'framer-motion';

import Image from 'next/image';
import { Fade as Hamburger } from 'hamburger-react';
import yaml from 'config/config.yml';
console.log(yaml.navigation);
const routes = yaml.navigation.items;
// import
// import routes from '../../routes';
import SocialLInks from '../ui/SocialLinks';
import printAddress from '../../helpers/printing/printAddress';
import { getTarget } from '../../helpers/general/links';
import { primaryColor, hardCodedAddressText } from 'config';

const Navigation = ({ business }) => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const navFilter = itm => itm.name !== '';

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const hasScrolled = () => (scrollPosition > 10 ? true : false);

  const isprimaryCTA = r => r.isPrimaryCalledToAction;
  return (
    <div
      className={`fixed z-30 top-0 left-0  flex md:flex-col xl:flex-row justify-between w-full items-center px-3 lg:p-5 bg-white ${
        hasScrolled()
          ? 'border-b-2 border-l-2 border-r-2 border-primary'
          : 'bg-white'
      } transition-all duration-100 `}
    >
      <div className="logo-container pt-[10px] md:mb-4">
        <div className="">
          <Link href="/">
            <a>
              <img
                className="max-w-[200px]"
                alt={business.name}
                src={'/logo.png'}
              ></img>
            </a>
          </Link>
        </div>
      </div>
      <div className="hamburger-container relative z-10 order-9 md:hidden">
        <Hamburger
          toggled={navIsOpen}
          toggle={setNavIsOpen}
          color={primaryColor}
        ></Hamburger>
      </div>

      <div className="mobile-nav   fixed ">
        <motion.div
          animate={{
            y: navIsOpen ? 0 : -1200,
          }}
          transition={{ duration: 0.5 }}
          className={`fixed bg-dark  h-screen animate-none transition-none  top-0 left-0 w-full `}
        >
          <div className="absolute top-[3.5rem] left-0 w-full flex justify-center ">
            <img className="w-[60px] " src="/svg.svg" alt={business.name} />
          </div>
          <nav className="flex flex-col  items-center justify-center pt-8 lg:pt-0 h-full max-w-md m-auto">
            {routes.filter(navFilter).map((route, idx) => (
              <React.Fragment key={route.name}>
                <motion.div
                  key={route.name}
                  className={`py-2 mb-2 ${isprimaryCTA(route) ? 'mb-4 ' : ''}`}
                  animate={{
                    // x: navIsOpen ? 0 : -1900,
                    opacity: navIsOpen ? 1 : 0,
                  }}
                  transition={{
                    delay: navIsOpen ? idx * 0.15 : 0,
                    duration: navIsOpen ? 0.35 : 0,
                  }}
                >
                  <Link
                    href={
                      route.url
                        ? route.url
                        : `/${slugify(route.name, { lower: true })}`
                    }
                  >
                    <a
                      target={getTarget(route.url || '')}
                      className={`text-white  font-body uppercase  text-base lg:text-3xl hover:text-primary transition-all duration-75 ${
                        isprimaryCTA(route)
                          ? 'border-2 p-3 px-6 border-primary bg-primary text-dark hover:text-white hover:bg-transparent'
                          : ''
                      }`}
                    >
                      {route.name}
                    </a>
                  </Link>
                </motion.div>
              </React.Fragment>
            ))}
          </nav>
          {/* <div className="h-[30%]  flex flex-col items-center justify-center  text-lg font-body  bg-primary text-dark ">
            <div className="flex">
              <SocialLInks
                large
                fill={'#111'}
                links={business.links}
                slug={business.slug}
              />
            </div>
            <div className="my-3">{hardCodedAddressText}</div>
            <div>
              <img
                className="w-[200px]"
                src="/gn-power-black.svg"
                alt="Powered By GoNation"
              />
            </div>
          </div> */}
        </motion.div>
      </div>

      <div className="desktop-nav hidden md:flex flex-wrap items-center relative">
        <div
          className={`   animate-none transition-none md:bg-inherit top-0 left-0 w-full bg-dark flex w-full justify-between ${
            hasScrolled() && ''
          }`}
        >
          <nav
            className={`flex items-center flex-wrap md:justify-between pt-24 md:py-3 md:h-auto bg-transparent  ${
              hasScrolled() && ''
            }`}
          >
            {routes.filter(navFilter).map((route, idx) => (
              <React.Fragment key={route.name}>
                <div
                  key={route.name}
                  className={`p-2 ${route.hideInHamburger && 'hidden'}`}
                >
                  <Link
                    href={
                      route.url
                        ? route.url
                        : `/${slugify(route.name, { lower: true })}`
                    }
                  >
                    <a
                      target={getTarget(route.url || '')}
                      className={`  uppercase text-lg md:text-xs lg:text-sm hover:text-primary transition-all duration-500 ${
                        hasScrolled() && 'text-dark '
                      } ${
                        route.isPrimaryCalledToAction
                          ? 'border-2 px-2 py-2 border-primary bg-primary text-dark hover:text-dark hover:bg-transparent'
                          : 'bg-transparent text-dark'
                      }`}
                    >
                      {route.name}
                    </a>
                  </Link>
                </div>
              </React.Fragment>
            ))}
          </nav>
          <div className="hidden md:flex justify-center items-center hamburger-container relative z-10 order-9 ">
            <Hamburger
              toggled={navIsOpen}
              toggle={setNavIsOpen}
              color={primaryColor}
            ></Hamburger>
          </div>
          <div className="h-[25%] md:h-auto flex md:hidden flex-col items-center justify-end text-dark text-sm font-display">
            <div>
              <SocialLInks large links={business.links} slug={business.slug} />
            </div>
            <div className="my-3 mt-6">{printAddress(business)}</div>
            <div></div>
          </div>
        </div>
      </div>

      {/* <div className="hidden lg:block absolute left-0 bottom-0 w-full">
        <div className="pb-3">
          <p className="text-xs text-center">
            <Image src={gnPowerBlack} alt="GoNation"></Image>
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Navigation;
