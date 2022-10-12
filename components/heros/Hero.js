import { useState } from 'react';
import { FaRegLemon } from 'react-icons/fa';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Shout from '../shout/Shout';
import OpacityBG from '../ui/OpacityBG';
import ShoutCard from '../shout/ShoutCard';
import Title from 'components/ui/Title';

export const Hero = ({
  imgClassList = 'h-screen md:h-[900px] lg:h-[800px] xl:h-[850px]',
  imageWrapperClassList = '',
  interval = 6000,
  transitionTime = 3000,
  story,
  shout,
  showLogo = false,
  business,
}) => {
  const [displayShoutOverlay, setDisplayShoutOverlay] = useState(false);
  const defaultImageStyle = 'object-cover flex ';
  if (!story) {
    return;
  }
  const { media } = story;

  if (!story) {
    return '';
  }

  const renderIndicator = (onClickHandler, isSelected, index, label) => {
    if (isSelected) {
      return (
        <span className="text-white render-icon px-2">
          <img className="max-w-[25px]" src="/svg.svg" alt="Lemon" />
        </span>
      );
    }
    return (
      <span className="text-white render-icon px-2">
        <FaRegLemon></FaRegLemon>
      </span>
    );
  };

  return (
    <div className="relative ">
      <Carousel
        animationHandler="fade"
        autoPlay={true}
        infiniteLoop={true}
        interval={interval}
        transitionTime={transitionTime}
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        swipeable={false}
        showIndicators
        renderIndicator={(onClickHandler, isSelected, index, label) =>
          renderIndicator(onClickHandler, isSelected, index, label)
        }
      >
        {media?.map(({ cloudinaryId, name, description }) => (
          <img
            key={cloudinaryId}
            alt={name || description}
            className={`${defaultImageStyle} ${imgClassList}`}
            layout="fill"
            // width={1900}
            // height={800}
            // width={800}
            // height={800}
            src={`https://res.cloudinary.com/gonation/w_1800/q_auto/f_auto/${cloudinaryId}`}
          />
        ))}
      </Carousel>

      {/* {shout ? <Shout data={shout}></Shout> : ''} */}
      <div className="absolute top-24 md:top-0 bottom-0 w-full flex flex-col md:flex-row z-20  md:justify-center pr-12   justify-end  p-4">
        <div className="lg:absolute lg:left-2 lg:bottom-2 z-20">
          <ShoutCard
            displayShoutOverlay={displayShoutOverlay}
            setDisplayShoutOverlay={setDisplayShoutOverlay}
            data={shout}
            business={business}
          />
        </div>

        <div className=" absolute left-0 top-0 w-full h-screen flex justify-center items-start pt-[11rem] md:pt-24 lg:pt-0 lg:items-center lg:justify-center ">
          {/* {showLogo ? <img className=" " src={`/logo.png`} /> : ''} */}
          {story?.title?.length ? (
            <Title
              size={`text-5xl lg:text-7xl xl:text-9xl mt-4 normal-case text-white font-display `}
              center={true}
            >
              {story.title}
            </Title>
          ) : (
            ''
          )}
        </div>
      </div>
      <OpacityBG strength="opacity-10"></OpacityBG>
    </div>
  );
};
