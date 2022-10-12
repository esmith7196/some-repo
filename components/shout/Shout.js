import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CTA from '../ui/CTA';

const Shout = ({ data }) => {
  const [showFullPhoto, setShowFullPhoto] = useState(false);
  const { text } = data.shout;
  const { isDefault } = data.shout.image;
  const { cloudinaryId } = data.shout.image.image;

  const linkTitle = data.shout.ctas
    ? Object.keys(data.shout.ctas)[0] || ''
    : '';
  const linkAddress = linkTitle.length ? data.shout.ctas[linkTitle] : '';

  const renderLinks = () => {
    return (
      <Link className="color-primary " href={`${linkAddress}`}>
        {linkTitle}
      </Link>
    );
  };
  return (
    <div className=" z-10 bottom-0 text-white w-full p-4 bg-background  ">
      <div className="md:max-w-lg m-auto">
        <h4 className="text-2xl border-b-2 mb-4 text-primary border-primary">
          Recent Shout
        </h4>
        <p className="text-sm mb-4 text-dark">
          {text} {linkTitle && linkAddress ? renderLinks() : ''}
        </p>
        {!isDefault ? (
          <button onClick={() => setShowFullPhoto(true)}>
            <Image
              className="md:max-w-[100px]"
              width={100}
              height={100}
              src={`https://res.cloudinary.com/gonation/w_1800/q_auto/f_auto/${cloudinaryId}`}
              alt="Recent Shout!"
            />
          </button>
        ) : (
          ''
        )}
        {showFullPhoto ? (
          <div
            className="fixed h-screen w-full bg-black flex items-center justify-center z-40 top-0 left-0 p-4 "
            onClick={() => setShowFullPhoto(false)}
          >
            <div className="max-w-[900px] m-auto">
              <Image
                className="w-full "
                width={300}
                height={275}
                src={`https://res.cloudinary.com/gonation/w_1800/q_auto/f_auto/${cloudinaryId}`}
                alt="Recent Shout!"
              />
              <p className="mt-4 text-center">Click Anywhere to close</p>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Shout;
