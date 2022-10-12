import React from 'react';
import MenuItem from './menuItem';
import shortid from 'shortid';
import slugify from 'slugify';
import Fade from 'react-reveal/Fade';
import Image from 'next/image';

const AllIn = ({ menuData, setModalActive, onBackClick }) => {
  // Takes Nested sections and and gets the nested child items and child sections
  const splitSectionChildren = section => {
    return section.inventory.reduce(
      (acc, curr) => {
        if ('item' in curr) {
          acc.childItems.push(curr);
        } else if ('section' in curr) {
          acc.childSections.push(curr);
        }
        return acc;
      },
      { childItems: [], childSections: [] }
    );
  };

  // Recursively loop through menus and nested menus
  const renderMenu = (menu, nested, idx) => {
    const { section } = menu;
    const parsedSection = splitSectionChildren(menu);

    return (
      <div
        key={shortid.generate()}
        className={`allInContainer flex flex-wrap justify-center items-start ${slugify(
          section.name,
          {
            lower: true,
          }
        )}`}
      >
        {/* header with section name and description */}
        <div className="menuContainer text-left w-full">
          {section.name ? (
            <h4 className="text-3xl xl:text-5xl text-dark mb-9  text-center mt-6 font-display">
              <span>{section.name}</span>
            </h4>
          ) : (
            ''
          )}
          {section.desc ? (
            <p className="menuSectionDescription text-center">{section.desc}</p>
          ) : (
            ''
          )}
          <div className="flex flex-wrap mt-5">
            {parsedSection.childItems.map(({ item }, index) => {
              return (
                <MenuItem
                  key={shortid.generate()}
                  type={'default'}
                  item={item}
                  isSingleItem={parsedSection.childItems.length === 1}
                  menuItemIndex={index}
                />
              );
            })}
          </div>
        </div>

        {/* child sections */}
        {parsedSection.childSections.map((childSection, idx) =>
          renderMenu(childSection, true, idx)
        )}
      </div>
    );
  };

  return (
    <div className="allInContainerWrapper">
      {onBackClick ? (
        <button className="backToMenuBtn" onClick={() => onBackClick()}>
          ← Back
        </button>
      ) : (
        ''
      )}
      {renderMenu(menuData)}
    </div>
  );
};

export default AllIn;
