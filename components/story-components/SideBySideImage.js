import React from 'react';
import Image from 'next/image';
import { Fade } from 'react-reveal';
import Body from '../ui/Body';
import CTA from '../ui/CTA';
import Title from '../ui/Title';

const SideBySideImage = ({
  story,
  reversed,
  containerClassList,
  noNegativeMargin = false,
  widthLeft = 'md:w-1/2',
  widthRight = 'md:w-1/2',
  largerImageHeight = false,
}) => {
  if (!story || !story?.media[0]) {
    return null;
  }
  const { cloudinaryId, description } = story.media[0];
  const linkTitle = Object.keys(story.links)[0] || '';
  const linkAddress = story.links[linkTitle];

  const getMargin = () => (noNegativeMargin ? '' : 'lg:mt-[-200px]');

  const renderImages = () => {
    return story.media.map(({ cloudinaryId, description = story.name }) => (
      <Fade key={story.name} left>
        <div className="pb-2 md:pb-3	 xl:pb-0 md:pr-2">
          <img
            alt={description}
            className={`object-cover w-full h-full subtle-shadow rounded-sm ${
              largerImageHeight && 'lg:min-h-[400px]'
            }`}
            src={`https://res.cloudinary.com/gonation/w_1800/q_auto/f_auto/${cloudinaryId}`}
          ></img>
        </div>
      </Fade>
    ));
  };

  return (
    <div className="flex flex-col md:flex-row  px-6 items-center py-12 md:py-30 lg:py-12 relative">
      <div
        className={`${widthLeft}  text-center ${reversed ? 'md:order-5' : ''}`}
      >
        <div className={`flex flex-col xl:flex-row ${getMargin()}`}>
          {renderImages()}
        </div>
      </div>
      <div
        className={`${widthRight} subtle-shadow-sm px-5 font-display bg-transparent py-6  ${
          reversed ? 'md:order-1 lg:mr-2' : 'lg:mr-4 lg:ml-2'
        }`}
      >
        <Fade left>
          {/* <div className="absolute left-1/2 bottom-0 flex justify-end">
          <img src="/border.svg" alt="Border" className="h-full w-full " />
        </div> */}
          <div
            className={` leading-loose text-lg text-center ${
              reversed ? ' ' : ''
            }`}
          >
            <div className={`mb-3 flex flex-col items-center`}>
              <Title
                withCSSBorder
                size={`text-5xl md:text-6xl xl:text-7xl mt-4 normal-case w-fit px-8 lg:px-20 text-center  ${
                  reversed && '!border-primary '
                }`}
                center={false}
              >
                {story.title}
              </Title>
              <Title
                size={`text-2xl md:text-3xl xl:text-7xl mt-4 normal-case ${
                  reversed && ''
                }`}
                center={false}
              >
                {story.subtitle}
              </Title>
            </div>
            <div className="text-dark font-body max-w-sm m-auto text-left">
              <Body body={story.body} />
            </div>
          </div>
        </Fade>

        <div className={`mt-12 text-center`}>
          {linkTitle && linkAddress ? (
            <CTA primaryFilled classList=" py-8" url={`${linkAddress}`}>
              {linkTitle}
            </CTA>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBySideImage;
