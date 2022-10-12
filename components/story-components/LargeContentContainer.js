import React from 'react';
import { BsArrowDown } from 'react-icons/bs';
import Image from 'next/image';
import CTA from '../ui/CTA';
import Body from '../ui/Body';
import { Slide } from 'react-reveal';
import { primaryColor } from 'config';

const LargeContentContainer = ({ story, solidBg }) => {
  const { cloudinaryId, description } = story.media[0];
  const linkTitle = Object.keys(story.links)[0] || '';
  const linkAddress = story.links[linkTitle];
  //   <img
  //     alt={description}
  //     className={`h-full object-cover`}
  //     src={`https://res.cloudinary.com/gonation/w_1800/q_auto/f_auto/${cloudinaryId}`}
  //   />;
  if (cloudinaryId) {
    return (
      <div
        className={`h-screen w-full bg-cover flex justify-center items-center p-7 px-12 relative bg-center bg-dark ${solidBg}`}
        style={
          solidBg
            ? {}
            : {
                backgroundImage: `url(https://res.cloudinary.com/gonation/w_1800/q_auto/f_auto/${cloudinaryId})`,
              }
        }
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
        <div className="max-w-md m-auto text-white relative text-center">
          <div className="mb-6 leading-7 text-md">
            <Slide left>
              <h4 className="text-5xl lg:text-6xl xl:text-7xl font-display text-primary">
                {story.title}
              </h4>
            </Slide>
          </div>
          <Slide right>
            <div className="my-12 leading-loose text-base font-body">
              <Body body={story.body} />
            </div>
          </Slide>
          <Slide left>
            <CTA primaryFilled url={`${linkAddress}`}>
              {linkTitle}
            </CTA>
          </Slide>
          <div className="flex justify-center mt-12">
            <span className="animate-pulse">
              <BsArrowDown fill={primaryColor} size={64}></BsArrowDown>
            </span>
          </div>
        </div>
      </div>
    );
  }
};

export default LargeContentContainer;
