import React from 'react';
import getGoogleString from '../../helpers/printing/getGoogleString';
import printAddress from '../../helpers/printing/printAddress';
import Title from '../ui/Title';
import Phone from './Phone';
import SocialLInks from '../ui/SocialLinks';
import { hardCodedAddressText, hardCodedAddressURL } from 'config';

const DetailsBox = ({ aboutData, title = 'Contact Us' }) => {
  const detailClassList = 'mb-3 text-lg';
  return (
    <div className="font-body text-white lg:mt-24">
      <div className="text-center">
        <Title classList="mb-4">{title}</Title>
        <p className={detailClassList}>
          <a
            href={hardCodedAddressURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {hardCodedAddressText}
          </a>
        </p>
        <p className={detailClassList}>
          <Phone {...aboutData} />
        </p>
        <div className={detailClassList}>
          <div className="flex justify-center">
            <SocialLInks {...aboutData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsBox;
