import React, { useState } from 'react';
import Image from 'next/image';
import Price from './Price';
import PriceWithVariants from './PriceWithVariants';
import Lightbox from 'react-image-lightbox';

const MenuItem = ({
  item,
  type,
  withDollar,
  hasMenuImages,
  menuItemIndex,
  isSingleItem,
}) => {
  const [lightBox, setLightbox] = useState({
    isOpen: false,
    mainSrc: '',
  });

  const getMenuItemType = () => {
    switch (type) {
      case 'someCase':
      default:
        return defaultType();
    }
  };

  // When copying a menu, for some reason the string URL gets a -copy attached at the end of it. This function removes it.
  const removeImageCopy = img =>
    img.includes('copy') ? img.substring(0, img.length - 5) : img;

  const imageCopy = item.imageUrl.includes('copy')
    ? removeImageCopy(item.imageUrl)
    : item.imageUrl;

  const defaultType = () => (
    <div className="menuItemInnerContainer  m-auto subtle-shadow w-full h-full border-b-2 border-dotted border-primary">
      <div className="p-4">
        {lightBox.isOpen && (
          <Lightbox
            imageCaption={
              <div sx={{ height: '25px' }}>
                <p className="menuItemName">{item.name}</p>
              </div>
            }
            mainSrc={removeImageCopy(lightBox.mainSrc)}
            onCloseRequest={() => setLightbox({ isOpen: false })}
          />
        )}

        {item.photo_id ? (
          <div
            className="menuItemImageContainer"
            onClick={
              item.photo_id
                ? () =>
                    setLightbox({
                      isOpen: true,
                      mainSrc: item.imageUrl,
                    })
                : () => ''
            }
          >
            <div className="itemImageFill" />

            <Image
              className={`${
                item.photo_id ? 'menuItemImg' : 'menuItemImgDefault'
              } ${!item.photo_id} ? 'hidden' : ''`}
              width={800}
              height={800}
              src={item.photo_id ? imageCopy : ''}
              alt={item.name}
            />
          </div>
        ) : (
          ''
        )}

        <div className="menuItemContentContainer flex flex-wrap ">
          {item.variants.length === 1 && item.variants[0].label === '' ? (
            <div className="menuItemNamePriceContainer w-full ">
              <p className="menuItemName w-full block text-lg uppercase tracking-widest ">
                {item.name}{' '}
              </p>
              {item.desc && (
                <p className="menuItemDescription my-4 max-w-xs">{item.desc}</p>
              )}
              <Price withDollar={withDollar} variants={item.variants} toSide />
            </div>
          ) : (
            <div className="flex-col items-center">
              <p className="menuItemName w-full block text-xl font- uppercase tracking-wider">
                {item.name}
              </p>
              {item.desc && (
                <p className="menuItemDescription my-2">{item.desc}</p>
              )}
              <PriceWithVariants
                withDollar={withDollar}
                variants={item.variants}
                toSide
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div
      className={`w-full xl:px-8 lg:px-2 lg:py-8 md:w-1/2 lg:w-1/2 xl:w-1/3 mb-4 lg:mb-0 text-dark`}
    >
      {getMenuItemType()}
    </div>
  );
};

export default MenuItem;
