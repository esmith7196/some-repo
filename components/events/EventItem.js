import React, { useContext } from 'react';
import dayjs from 'dayjs';
import Link from 'next/link';
import EventDate from './EventDate';
import EventDays from './EventDays';
import cloudinaryString from '../../helpers/cloudinary/cloudinaryString';
import Image from 'next/image';
import DoubleBorder from '../ui/DoubleBorder';
import Title from '../ui/Title';

export default function EventItem({
  event,
  // setEvents,
  // state,
  // slug,
  variantName,
  // isSpecialEvents,
}) {
  const {
    _id,
    name,
    starts,
    ends,
    description,
    imageBaseUrl,
    imageurl,
    imagePrefix,
    ctas,
  } = event;

  return (
    <div
      key={_id}
      className={`eventItemContainer ${_id} flex flex-col lg:flex-row items-center font-body h-full bg-light p-4 w-full`}
    >
      <div className="lg:w-1/3 h-full flex">
        <Image
          width={1000}
          height={750}
          className="object-cover w-full h-full "
          src={cloudinaryString(imageBaseUrl, imagePrefix, 1000)}
          alt={name}
          onClick={() => null}
        />
      </div>

      <div className="eventItemContent text-lg text-dark lg:pl-8 ">
        <div>
          <Title center={false} size="text-2xl my-4 tracking-widest ">
            {name}
          </Title>
        </div>
        <div className="eventItemDateContainer flex flex-col items-start text-dark">
          {event.eventDays ? (
            <EventDays eventDays={event.eventDays} variantName={variantName} />
          ) : (
            <EventDate date={starts} variantName={variantName} />
          )}
        </div>

        <p className="eventTime text-left my-2 text-dark">
          {/* <FontAwesomeIcon style={{ marginRight: '10px', fontSize: '22px' }} icon={faClock} /> */}
          {`${dayjs(starts).format('h:mm A')}`} -{' '}
          {`${dayjs(ends).format('h:mm A')}`}
        </p>

        <p className="eventItemDescription text-dark max-w-md">{description}</p>

        {ctas ? (
          <div className="eventCTABtns flex">
            {Object.keys(ctas).map(ctaName => {
              if (ctas[ctaName]) {
                return (
                  <Link
                    key={ctas[ctaName]}
                    href={ctas[ctaName]}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="font-bold tracking-wide uppercase mt-12 cursor-pointer hover:text-primary">
                      {ctaName}
                    </span>
                  </Link>
                );
              }
            })}
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
