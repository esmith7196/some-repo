import React from 'react';
import Image from 'next/image';

const Masonry = ({ data }) => {
  const imagesFlattened = data
    .map(album => album.photos.map(photo => photo))
    .flat();

  const getDynamicClass = () => {
    const value = Math.random() * 100;
    if (value < 13) {
      return 'tall';
    }
    if (value < 26) {
      return 'wide';
    }
    if (value < 39) {
      return 'big';
    }
    return '';
  };

  return (
    <div className="">
      <div className="grid-wrapper block md:grid gap-6 grid-cols-[repeat(16, minmax(0, 1fr))] subtle-shadow">
        {imagesFlattened.map(img => (
          <div key={img.id} className={`${getDynamicClass()} subtle-shadow`}>
            <Image
              src={img.imageUrl}
              width={800}
              height={800}
              className="object-cover h-full w-full subtle-shadow"
              alt={img.caption || 'Masonry gallery'}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Masonry;
