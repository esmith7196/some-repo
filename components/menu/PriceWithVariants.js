import React from 'react';
import shortid from 'shortid';
const Price = ({ variants, withDollar }) => {
  const renderPrices = () =>
    variants.map((variant, index) => (
      <div key={shortid.generate()}>
        {variant.labelTitle ? (
          <div className="labelTitle uppercase ">{variant.labelTitle}</div>
        ) : (
          ''
        )}
        <div className="variantContainer ">
          <span className="menuItemPriceLabel uppercase text-xs font-normal">
            {variant.label}
          </span>
          <span> </span>
          <span className="menuItemPriceVariants ">
            {withDollar ? '$' : ''}
            {variant.price}
          </span>
        </div>
      </div>
    ));

  return <div className="itemVariantsContainer">{renderPrices()}</div>;
};

export default Price;
