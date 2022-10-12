import React from 'react';

const Price = ({ variants, withDollar }) => {
  return (
    <div className="menuPriceContainer">
      {variants[0].labelTitle ? (
        <p className="menuItemPriceLabel font-bold">{variants[0].labelTitle}</p>
      ) : (
        ''
      )}
      {variants[0].labelTitle && (
        <p className="menuItemPriceLabel font-bold">{variants[0].label}</p>
      )}{' '}
      <p className="menuItemPrice">
        {withDollar ? '$' : ''}
        {variants[0].price}
      </p>
    </div>
  );
};

export default Price;
