import React from 'react';
import pageConfig from 'config/pages/index.yml'; // Make this DYNAMIC (config/pages/Our.yml)
import Layout from 'components/layout/layout';
import fetchGoNationData from 'helpers/fetchers/fetchGoNationData';
import loadComponent from 'helpers/loadComponent';

// make sure we include ALL this data destructured in props
// File name DYNAMIC
export default function about({
  storiesData,
  poweredImagesData,
  shoutData,
  aboutData,
  menuInventoryData,
  eventsData,
}) {
  const stories = pageConfig.components.map(pageComponent => {
    const { storyIdOrTag, type } = pageComponent;
    return loadComponent({
      type,
      storyIdOrTag,
      storiesData: storiesData['general'], // DYNAMIC (can be general, story, press)
      shoutData,
      aboutData,
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
export async function getStaticProps() {
  const {
    storiesData,
    poweredImagesData,
    shoutData,
    aboutData,
    menuInventoryData,
    eventsData,
  } = await fetchGoNationData({
    stories: false, // DYNAMIC
    shout: true, // DYNAMIC
    poweredImages: true, // DYNAMIC
    about: true, // DYNAMIC
    menuInventory: false, // DYNAMIC
    menuPL: 1, // DYNAMIC
    eventsData: undefined, // DYNAMIC
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
