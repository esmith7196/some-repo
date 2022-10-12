// todo handle dynamic imports using something like react lazy
import { Hero } from 'components/heros/Hero';
import SideBySideImage from 'components/story-components/SideBySideImage';
import findStoryByTag from './general/findStoryByTag';
import LargeContentContainer from 'components/story-components/LargeContentContainer';
import ClickableBoxes from 'components/story-components/ClickableBoxes';
import BasicContentContainer from 'components/story-components/BasicContentContainer';
import PageHero from 'components/heros/PageHero';

const loadComponent = ({
  type,
  storyIdOrTag,
  storiesData,
  shoutData,
  aboutData,
  pageComponent,
  pageName,
  pageTitle,
  poweredImage,
  key,
}) => {
  const story = findStoryByTag(`${storyIdOrTag}`, storiesData);
  const [businessData, business, shout] = [aboutData, aboutData, shoutData];
  const componentProps = {
    story,
    pageComponent,
    businessData,
    business,
    shout,
    poweredImage,
    pageTitle,
    key,
  };
  switch (type) {
    case 'hero':
      return <Hero {...componentProps} />;
    case 'sideBySide':
      return <SideBySideImage {...componentProps} />;
    case 'largeContentContainer':
      return <LargeContentContainer {...componentProps} />;
    case 'clickableBoxes':
      return <ClickableBoxes {...componentProps} />;
    case 'basicContentContainer':
      return <BasicContentContainer {...componentProps} />;
    case 'pageHero':
      return <PageHero img={poweredImage} pageTitle={pageTitle || pageName} />;
    default:
      return null;
  }
};

export default loadComponent;
