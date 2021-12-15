import React, { ReactElement } from 'react';

type SectionWrapperProps = {
  children: ReactElement | string;
};

function SectionWrapper({ children }: SectionWrapperProps) {
  return (
    <div className="p-1 sm:p-2 md:p-3 my-5 rounded border-gray-500 border-2 relative">
      {children}
    </div>
  );
}

export default SectionWrapper;
