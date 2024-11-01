import React from 'react';

const ShimmerMenu = () => {
  return (
    <div className="h-full w-full">
      <header className="w-full h-64 bg-gray-200 pt-3">
        <div className="w-64 h-56 rounded-lg shadow-lg shadow-gray-600 bg-gray-300 ml-64" ></div>
      </header>


      <div className="h-96 p-12 bg-gray-200 mt-14">
        <div className='h-36 w-48 rounded-lg ml-[950px] bg-gray-300 mt-3 shadow-lg shadow-gray-600' ></div>
      </div>
    </div>
  );
};

export default ShimmerMenu;
