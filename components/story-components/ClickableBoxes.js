import React, { useEffect } from 'react';
import ClickableBox from 'components/ui/ClickableBox';

const ClickableBoxes = ({
  stories = [],
  containerClassList = '',
  width = 'w-1/4',
  noClick = false,
}) => {
  const outerClassList = `${containerClassList} flex flex-wrap px-4`;
  // function to reverse the order of the stories

  // reverse an array
  const reverseArray = array => {
    return array.slice(0).reverse();
  };

  const reversedArray = reverseArray(stories);
  return (
    <div className={outerClassList}>
      {reversedArray.map((story, idx) => (
        <div
          className={`w-full md:w-1/2 lg:w-1/3 p-4 relative ${
            idx === 2 ? 'flex-1' : ''
          }`}
          key={story.id}
        >
          <ClickableBox
            idx={idx}
            noClick={noClick}
            story={story}
            width={width}
          />
        </div>
      ))}
    </div>
  );
};

export default ClickableBoxes;
