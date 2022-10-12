const pageLiteral = (pageName, config) => `import React from 'react';
import pageConfig from 'config/pages/index.yml'; // Make this DYNAMIC (config/pages/${
  config.pageName
}.yml)
import Layout from 'components/layout/layout';
import fetchGoNationData from 'helpers/fetchers/fetchGoNationData';
import loadComponent from 'helpers/loadComponent';
import findPoweredImage from 'helpers/general/findPoweredImage';

// make sure we include ALL this data destructured in props
// File name DYNAMIC
export default function ${pageName}({
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
      storiesData: storiesData[${
        config.storyType ? `'${config.storyType}'` : "'general'"
      }], // DYNAMIC (can be general, story, press)
      shoutData,
      aboutData,
	  pageComponent,
      poweredImagesData,
      pageName,
      poweredImage: foundPoweredImage,
      key: storyIdOrTag || ${pageName}-${type},
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
export async function ${
  config.renderType ? config.renderType : 'getServerSideProps'
}() {
  const {
    storiesData,
    poweredImagesData,
    shoutData,
    aboutData,
    menuInventoryData,
    eventsData,
  } = await fetchGoNationData({
    stories: ${config.stories}, // DYNAMIC
    shout: ${config.shout}, // DYNAMIC
    poweredImages: ${config.poweredImages}, // DYNAMIC
    about: ${config.about}, // DYNAMIC
    menuInventory: ${config.menuInventory}, // DYNAMIC
    menuPL: ${config.menuPL || '1'}, // DYNAMIC
    eventsData: ${config.eventsData}, // DYNAMIC
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
`;

module.exports = pageLiteral;
