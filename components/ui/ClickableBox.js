import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Body from './Body';
import { Fade } from 'react-reveal';

const ClickableBox = ({ story, noClick, idx }) => {
  const { cloudinaryId, description } = story.media[0];
  const linkTitle = Object.keys(story.links)[0] || '';
  const linkAddress = story.links[linkTitle];
  const classList = `!w-full !w-full h-full relative cursor-pointer`;
  if (noClick) {
    return (
      <>
        <div className="p-4 text-center border-dark  md:h-full overflow-hidden max-h-[350px]">
          <h4 className="text-center text-3xl md:text-3xl lg:text-4xl mt-5 cursor-pointer border-b-2 border-secondary mb-2">
            {story.title}
          </h4>
          <Body body={story.body}></Body>
          <img
            alt={story.title}
            className="object-cover md:h-full relative  w-full mt-2"
            src={`https://res.cloudinary.com/gonation/w_800/q_auto/f_auto/${cloudinaryId}`}
          ></img>
        </div>
      </>
    );
  }
  return (
    <div className="">
      <Fade left={idx === 0 || idx === 2} right={idx === 1}>
        <Link className={classList} href={linkAddress?.toLowerCase() || '/'}>
          <a>
            <div className="py-0 border-dark  md:h-full overflow-hidden cursor-pointer mb-6">
              <img
                alt={story.title}
                className="object-contain md:h-full relative  zoom overflow-hidden  w-full h-full "
                layout="fill"
                src={`https://res.cloudinary.com/gonation/w_800/q_auto/f_auto/${cloudinaryId}`}
              ></img>
            </div>
            <h4 className="text-center text-3xl md:text-3xl lg:text-4xl mt-0 cursor-pointer bg-dark py-4">
              {story.title}
            </h4>
            <Body body={story.body}></Body>
          </a>
        </Link>
      </Fade>
    </div>
  );
};

export default ClickableBox;
