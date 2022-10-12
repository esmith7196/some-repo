import React, { useEffect } from 'react';

const MenuTab = ({
  section,
  inventory,
  setActiveSection,
  setDisplayedCellSection,
  isTabs,
  activeSection,
}) => {
  useEffect(() => {
    return () => {};
  }, []);

  const isActive = activeSection.section._id === section._id;

  return (
    <div
      className={`flex-1 min-w-[221px] text-center px-4 py-2 text-xs mb-1 uppercase cursor-pointer hover:bg-primary hover:text-white transition-all duration-200 font-body shadow-sm  ${
        isActive ? 'bg-primary text-dark' : 'bg-background text-white '
      }`}
      id="menuTab"
      onClick={() =>
        isTabs
          ? setActiveSection({ section, inventory })
          : setDisplayedCellSection({
              section,
              inventory,
            })
      }
    >
      {section.name}
    </div>
  );
};

export default MenuTab;
