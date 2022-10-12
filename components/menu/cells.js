import React from 'react';
import shortid from 'shortid';
import splitSectionChildren from '../../helpers/menu/splitSectionChildren';
import MenuCell from './menuCell';

const Cells = ({ menuData, onCellClick, mode }) => {
  const { childSections } = splitSectionChildren(menuData);

  const renderChildSections = () => {
    return childSections.map(({ section, inventory }, idx) => (
      <MenuCell
        key={shortid.generate()}
        section={section}
        inventory={inventory}
        onCellClick={onCellClick}
        numSections={childSections.length}
        mode={mode}
      />
    ));
  };

  return (
    <div>
      <div className="cellContainer">{renderChildSections()}</div>
    </div>
  );
};

export default React.memo(Cells);
