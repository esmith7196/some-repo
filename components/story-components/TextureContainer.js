import React from 'react';
import Title from '../ui/Title';

export default function TextureContainer({ story }) {
  const { cloudinaryId, description } = story.media[0];
  const { title } = story;
  const texture = `https://res.cloudinary.com/gonation/w_800/q_auto/f_auto/${cloudinaryId}`;

  const textureContainerClassList =
    'min-h-[450px] flex justify-center items-center';
  const titleClassList = 'text-3xl lg:text-6xl text-white bg-primary p-3';
  return (
    <div
      style={{ backgroundImage: `url(${texture})` }}
      className={textureContainerClassList}
    >
      <Title size={titleClassList}>{title}</Title>
    </div>
  );
}
