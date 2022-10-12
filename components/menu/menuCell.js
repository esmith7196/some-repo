import React from 'react';
import Image from 'next/image';

const MenuCell = ({ onCellClick, section, inventory, numSections, mode }) => {
  const defaultCellBG =
    'https://res.cloudinary.com/gonation/gonation.data.prod/default/img-sec-cover-full.png';

  return (
    <div
      className={`section-cell ${section.name}`}
      onClick={() => {
        return onCellClick({ section, inventory });
      }}
    >
      <div className="menuCell">
        <div className="cellImageContainer">
          <div className="imageFill" />
          {section.imageUrl !== defaultCellBG ? (
            <Image
              width={400}
              height={400}
              className="cellImage"
              src={section.imageUrl !== defaultCellBG ? section.imageUrl : ''}
              alt="Menu Section Display"
            />
          ) : (
            ''
          )}
        </div>
        <p className={`cellName`}>{section.name}</p>
      </div>
    </div>
  );
};

export default MenuCell;
