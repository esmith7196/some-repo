import React from 'react';
import {
  BsLinkedin,
  BsYoutube,
  BsTwitter,
  BsPinterest,
  BsInstagram,
  BsFacebook,
} from 'react-icons/bs';

const SocialLInks = ({
  links,
  slug,
  withHandles,
  className,
  large,
  fill = '#ffffff',
}) => {
  const icoSize = large ? 35 : 20;

  const txt = val => {
    if (withHandles) {
      return <p className="font-body ml-2">{val}</p>;
    }
    return '';
  };
  const classList = `socialLink flex mr-3 my-6 md:my-0 lg:mx-2 hover:underline hover:text-primary ${className}`;

  return (
    <>
      {links.facebook ? (
        <a
          href={`${links.facebook}`}
          target="_blank"
          rel="noreferrer"
          className={`facebook ${classList}`}
        >
          <BsFacebook fill={fill} size={icoSize}></BsFacebook>
          {txt('Facebook')}
        </a>
      ) : (
        ''
      )}
      {links.instagram ? (
        <a
          href={`${links.instagram}`}
          target="_blank"
          rel="noreferrer"
          className={`instagram ${classList}`}
        >
          <BsInstagram fill={fill} size={icoSize}></BsInstagram>
          {txt('Instagram')}
        </a>
      ) : (
        ''
      )}
      {links.linkedin ? (
        <a
          href={`${links.linkedin}`}
          target="_blank"
          rel="noreferrer"
          className={`linkedin ${classList}`}
        >
          <BsLinkedin fill={fill} size={icoSize} />
          {txt('Linked In')}
        </a>
      ) : (
        ''
      )}
      {links.youtube ? (
        <a
          href={`${links.youtube}`}
          target="_blank"
          rel="noreferrer"
          className={`instagram ${classList}`}
        >
          <BsYoutube fill={fill} size={icoSize} />
          {txt('Youtube')}
        </a>
      ) : (
        ''
      )}
      {links.twitter ? (
        <a
          href={`${links.twitter}`}
          target="_blank"
          rel="noreferrer"
          className={`twitter ${classList}`}
        >
          <BsTwitter fill={fill} size={icoSize} />
          {txt('Twitter')}
        </a>
      ) : (
        ''
      )}
      {links.pinterest ? (
        <a
          href={`${links.pinterest}`}
          target="_blank"
          rel="noreferrer"
          className={`pinterest ${classList}`}
        >
          <BsPinterest fill={fill} size={icoSize}></BsPinterest>
          {txt('Pinterest')}
        </a>
      ) : (
        ''
      )}
    </>
  );
};

export default SocialLInks;
