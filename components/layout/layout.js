import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Navigation from './navigation';
import Footer from './footer';
import FixedCallToActions from './FixedCallToActions';
import buildAvatar from '../../helpers/general/buildAvatar';
import { domain } from '../../config';
import slugifyLower from '../../helpers/printing/slugifyLower';

const Layout = ({
  children,
  business,
  pageTitle,
  pageDescription,
  shoutData,
}) => {
  const getPageTitle = () => {
    if (pageTitle) {
      return `${pageTitle} | ${business.name}`;
    }
    return `${business.name}`;
  };

  const getPageDescription = () => {
    if (pageDescription) {
      return pageDescription;
    }
    return `${business.desc}`;
  };

  return (
    <>
      <Head>
        <title>{getPageTitle()}</title>
        <meta charSet="utf-8" />
        <meta name="description" content={getPageDescription()} />
        <meta property="og:title" content={getPageTitle()} />
        <meta
          property="og:url"
          content={`${domain}/${slugifyLower(pageTitle)}`}
        />
        <meta property="og:image" content={buildAvatar(business)} />
      </Head>
      <Navigation business={business} />
      <main className="">{children}</main>
      <div className="md:hidden">
        <FixedCallToActions
          phone
          directions
          business={business}
          shoutData={shoutData}
        />
      </div>

      <Footer business={business} shoutData={shoutData} />
    </>
  );
};

export default Layout;
