import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Reviews({ data }) {
  const { inventory } = data;
  return (
    <Carousel showStatus={false} autoPlay loop>
      {inventory.map(itm => (
        <p
          key={itm.item.desc}
          className="mb-8 max-w-xl m-auto text-base italic"
        >
          {itm.item.desc}
        </p>
      ))}
    </Carousel>
  );
}
