import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dayjs from 'dayjs';
import {
  AiOutlineLink,
  AiOutlineFieldTime,
  AiOutlinePhone,
  AiOutlineClose,
} from 'react-icons/ai';
import { GrAnnounce } from 'react-icons/gr';
import CardCallToAction from './CardCallToAction';
import printMinimalAddress from 'helpers/printing/printMinimalAddress';

export default function ShoutCard({
  data,
  business,
  displayShoutOverlay,
  setDisplayShoutOverlay,
}) {
  const [showFullImage, setShowFullImage] = useState(false);

  const { text, title } = data.shout;
  const { isDefault } = data.shout.image;
  const { cloudinaryId } = data.shout.image.image;
  const { ctas } = data.shout;

  const toggleShoutDisplay = () => setDisplayShoutOverlay(!displayShoutOverlay);

  if (!displayShoutOverlay) {
    return (
      <div className="absolute bottom-56  md:bottom-0 left-0 flex justify-center w-full md:w-auto">
        <div className="">
          <button
            onClick={toggleShoutDisplay}
            className=" px-4 py-2 uppercase text-white  min-w-[250px]  font-bold tracking-widest flex flex-col items-center md:flex-row md:block"
          >
            <img
              className="max-w-[45px] animate-bounce"
              src="/svg.svg"
              alt="Lemon"
            />
            <span>Latest Shout</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    // <section className="flex flex-col justify-center antialiased bg-dark text-gray-600 min-h-[800px] p-4">
    // <div className="h-full">
    <div className="relative max-w-[340px] mx-auto bg-white shadow-lg rounded-lg">
      <div className="absolute top-2 right-2">
        <button className="cursor-pointer" onClick={toggleShoutDisplay}>
          <AiOutlineClose />
        </button>
      </div>
      <header className="pt-6 pb-4 px-5 border-b border-gray-200">
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center">
            <a className="inline-flex items-start mr-3" href="#0">
              <img
                className="rounded-full"
                src={`${data.imageBaseUrl}/${data.shout.business.avatar.image.cloudinaryId}`}
                width="48"
                height="48"
                alt={data.shout.business.name}
              />
            </a>
            <div className="pr-1">
              <a
                className="inline-flex text-gray-800 hover:text-gray-900"
                href="#0"
              >
                <h2 className="text-xl leading-snug font-bold">
                  {data.shout.business.name}
                </h2>
              </a>
              <a
                className="block text-sm font-medium hover:text-indigo-500"
                href="#0"
              >
                <span className="inline-flex items-center">
                  <span className="mr-1">
                    <AiOutlineFieldTime></AiOutlineFieldTime>
                  </span>
                  {printMinimalAddress(business)}
                </span>{' '}
              </a>
            </div>
          </div>

          <div className="relative inline-flex flex-shrink-0">
            <button className="text-gray-400 hover:text-gray-500 rounded-full focus:ring-0 outline-none focus:outline-none">
              <span className="sr-only">Announcement Icon</span>
              <span className="rotate-12">
                <GrAnnounce
                  color="#9CA3AF"
                  //   fill="#9CA3AF"
                  strokeWidth="1px"
                  stroke="1"
                  className="-rotate-12"
                ></GrAnnounce>
              </span>
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center space-x-4">
          {/* <div className="flex items-center">
            <span>
              <AiOutlinePhone></AiOutlinePhone>
            </span>

            <span className="text-xs whitespace-nowrap ml-0">
              <Link href={`tel:${business.phone}`}>
                <a>{business.phone}</a>
              </Link>
            </span>
          </div> */}
          {/* <div className="flex items-center">
            <svg
              className="w-4 h-4 fill-current flex-shrink-0 text-gray-400"
              viewBox="0 0 16 16"
            >
              <path d="M11 0c1.3 0 2.6.5 3.5 1.5 1 .9 1.5 2.2 1.5 3.5 0 1.3-.5 2.6-1.4 3.5l-1.2 1.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l1.1-1.2c.6-.5.9-1.3.9-2.1s-.3-1.6-.9-2.2C12 1.7 10 1.7 8.9 2.8L7.7 4c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l1.2-1.1C8.4.5 9.7 0 11 0ZM8.3 12c.4-.4 1-.5 1.4-.1.4.4.4 1 0 1.4l-1.2 1.2C7.6 15.5 6.3 16 5 16c-1.3 0-2.6-.5-3.5-1.5C.5 13.6 0 12.3 0 11c0-1.3.5-2.6 1.5-3.5l1.1-1.2c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L2.9 8.9c-.6.5-.9 1.3-.9 2.1s.3 1.6.9 2.2c1.1 1.1 3.1 1.1 4.2 0L8.3 12Zm1.1-6.8c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-4.2 4.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l4.2-4.2Z" />
            </svg>
            <Link href={domain}>
              <a className="text-xs font-medium whitespace-nowrap text-indigo-500 hover:text-indigo-600 ml-0">
                {trimURL(domain)}
              </a>
            </Link>
          </div> */}
        </div>
      </header>

      <div className="py-3 px-5">
        <h3 className="text-xs font-semibold uppercase text-gray-400 mb-1">
          {dayjs(data.shout.updatedAt).format('MMM DD, h:mm A')}
        </h3>

        <div className="divide-y divide-gray-200">
          <button className="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
            <div className={`flex items-center ${showFullImage && 'pb-12'}`}>
              <Image
                onClick={() => setShowFullImage(!showFullImage)}
                className={`rounded-full items-start flex-shrink-0 mr-3 object-cover ${
                  showFullImage && 'rounded-none'
                }`}
                width={showFullImage ? 500 : 128}
                height={showFullImage ? 500 : 128}
                src={`https://res.cloudinary.com/gonation/w_1800/q_auto/f_auto/${cloudinaryId}`}
                alt={text}
              />

              <div className={`pl-2 ${showFullImage && 'hidden'}`}>
                <h4 className="text-sm font-semibold text-gray-900">
                  Recent Shout
                </h4>
                <p className="text-sm block">{text}</p>
              </div>
            </div>
          </button>
        </div>
      </div>
      <CardCallToAction ctas={ctas} />
    </div>
    // </div>
    // </section>
  );
}
