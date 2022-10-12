import { businessId } from 'config/config.yml';

import {
  storiesFetch,
  aboutFetch,
  poweredImagesFetch,
  shoutFetch,
  eventFetch,
  menuInventoryFetch,
  galleryFetch,
} from '.';
const fetchGoNationData = async params => {
  const {
    about,
    stories,
    events,
    menuInventory,
    shout,
    gallery,
    poweredImages,
    menuPL,
    multiBusiness,
  } = params;

  let aboutData = {},
    storiesData = {},
    eventsData = {},
    menuInventoryData = {},
    shoutData = {},
    galleryData = {},
    poweredImagesData = {},
    multiBusinessData = {};

  if (stories) {
    try {
      storiesData = await storiesFetch(businessId);
    } catch (e) {
      storiesData = {
        error: e,
      };
    }
  }

  if (poweredImages) {
    try {
      poweredImagesData = await poweredImagesFetch(businessId);
    } catch (e) {
      poweredImagesData = {
        error: e,
      };
    }
  }

  if (about) {
    try {
      aboutData = await aboutFetch(businessId);
    } catch (e) {
      aboutData = {
        error: e,
      };
    }
  }

  if (shout) {
    try {
      shoutData = await shoutFetch(businessId);
    } catch (e) {
      shoutData = {
        error: e,
      };
    }
  }

  if (events) {
    try {
      eventsData = await eventFetch(businessId);
    } catch (e) {
      eventsData = {
        error: e,
      };
    }
  }

  if (menuInventory) {
    try {
      menuInventoryData = await menuInventoryFetch(businessId, menuPL);
    } catch (e) {
      menuInventoryData = {
        error: e,
      };
    }
  }

  if (gallery) {
    try {
      galleryData = await galleryFetch(businessId);
    } catch (e) {
      galleryData = {
        error: e,
      };
    }
  }

  if (multiBusiness) {
    try {
      const requests = multiBusiness.map(id => aboutFetch(id));
      multiBusinessData = await Promise.all(requests);
    } catch (e) {
      multiBusinessData = {
        error: e,
      };
    }
  }

  return {
    storiesData,
    poweredImagesData,
    aboutData,
    shoutData,
    eventsData,
    menuInventoryData,
    galleryData,
    multiBusinessData,
  };
};

export default fetchGoNationData;
