import React from 'react';
import EventItem from './EventItem';
import cloudinaryString from '../../helpers/cloudinary/cloudinaryString';
import Title from '../ui/Title';
import MissingEvents from './MissingEvents';

const Events = props => {
  const {
    businessData,
    options,
    pageTitle,
    singleEvents,
    recurringEvents,
    // eventsData: { recurringEventsData, specialEventsData },
  } = props;

  const {
    eventTagsToShow,
    eventTagsToHide,
    containerStyles,
    specialEventsOnly,
    recurringEventsOnly,
  } = options || {};

  const allEvents = singleEvents.concat(recurringEvents);
  return (
    <div className="flex flex-wrap">
      {allEvents.length === 0 ? <MissingEvents></MissingEvents> : ''}
      {allEvents
        .filter(evt => evt)
        .map(event => (
          <div key={event._id} className="w-full p-3">
            <EventItem event={event} slug={businessData.slug} />
          </div>
        ))}
    </div>
  );
};

export default Events;
