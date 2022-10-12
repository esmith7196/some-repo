import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import getGoogleString from '../../helpers/printing/getGoogleString';
import Shout from '../shout/Shout';

const FixedCallToActions = ({ business, shoutData }) => {
  const [displayShout, setDisplayShout] = useState(false);
  const { phone } = business;
  const linkClassList =
    'font-body font-normal tracking-widest uppercase  text-xs bg-dark  w-full block py-3 z-40 font-bold text-primary ';

  const bottomCTA = 'text-center w-1/2 bg-dark text-dark ';

  return (
    <div className="fixed bottom-6 left-0 flex justify-center w-full flex-wrap z-20  ">
      <div className="w-[250px] max-w-[250px] m-auto mb-8 flex flex-wrap bg-dark subtle-shadow rounded-md border-2 border-primary">
        <div className="w-full text-center border-b-2 border-primary tracking-wide">
          <Link href="/menus">
            <a className={`${linkClassList} p-0 tracking-widest`}>View Menu</a>
          </Link>
        </div>

        {shoutData ? (
          //   <div
          //     className="text-center w-full border-b-2 border-secondary"
          //     onClick={() => setDisplayShout(!displayShout)}
          //   >
          //     <a className={`${linkClassList} !bg-primary !text-white`}>
          //       Recent Shout
          //     </a>
          //   </div>
          <></>
        ) : (
          ''
        )}
        {/* <motion.div
          animate={{ height: displayShout ? 'auto' : 0 }}
          transition={{ duration: 0.25 }}
          className="w-full"
        > */}
        {/* <div className="text-center py-10 transition-all duration-1000 bg-background text-dark">
            <Shout data={shoutData}></Shout>
          </div> */}
        {/* </motion.div> */}
        <div className={`${bottomCTA} `}>
          <a
            className={`${linkClassList} border-b-0 border-primary`}
            href={`tel:${phone}`}
          >
            Call
          </a>
        </div>
        <div className={bottomCTA}>
          <a
            className={linkClassList}
            target="_blank"
            rel="noopener noreferrer"
            href={`${getGoogleString(business)}`}
          >
            Directions
          </a>
        </div>
      </div>
    </div>
  );
};

export default FixedCallToActions;
