import React from 'react';
import pageConfig from 'config/pages/index.yml'; // Make this DYNAMIC (config/pages/${}.yml)
import Layout from 'components/layout/layout';
import fetchGoNationData from 'helpers/fetchers/fetchGoNationData';
import loadComponent from 'helpers/loadComponent';
import findPoweredImage from 'helpers/general/findPoweredImage';

// make sure we include ALL this data destructured in props
// File name DYNAMIC
export default function index({
  storiesData,
  poweredImagesData,
  shoutData,
  aboutData,
  menuInventoryData,
  eventsData,
}) {
  const stories = pageConfig.components.map(pageComponent => {
    const { storyIdOrTag, type } = pageComponent;
    const { poweredImage } = pageComponent;
    const { pageName } = pageConfig;
    const foundPoweredImage = findPoweredImage(poweredImage, poweredImagesData);
    return loadComponent({
      type,
      storyIdOrTag,
      storiesData: storiesData.general, // DYNAMIC (can be general, story, press)
      shoutData,
      aboutData,
      pageComponent,
      poweredImagesData,
      pageName,
      poweredImage: foundPoweredImage,
      key: storyIdOrTag || `${pageName}-${type}`,
    });
  });

  return (
    <Layout
      business={aboutData}
      pageTitle={pageConfig.pageName}
      shoutData={shoutData}
    >
      {stories}
    </Layout>
  );
}

// The following aspets of this are dynamic:

// 1. getServerSideProps vs getStaticProps DYNAMIC
// 2. We will ALWAYS Have the data as destructured. As well as the booleans. The only thing that will change in addition to serverSide VS static is the booleans.
export async function getServerSideProps() {
  const {
    storiesData,
    poweredImagesData,
    shoutData,
    aboutData,
    menuInventoryData,
    eventsData,
  } = await fetchGoNationData({
    stories: true, // DYNAMIC
    shout: true, // DYNAMIC
    poweredImages: true, // DYNAMIC
    about: true, // DYNAMIC
    menuInventory: true, // DYNAMIC
    menuPL: 2, // DYNAMIC
    eventsData: false, // DYNAMIC
  });
  return {
    props: {
      storiesData,
      poweredImagesData,
      shoutData,
      aboutData,
      menuInventoryData,
      eventsData,
    },
  };
}
