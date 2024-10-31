import React from 'react';

const Topbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full py-4 px-6 flex items-center justify-between z-10">
      {/* Dots Grid */}
      <div className="grid grid-cols-3 gap-1">
        {[...Array(9)].map((_, index) => (
          <span key={index} className="w-2 h-2 bg-white"></span>
        ))}
      </div>
      {/* Get Tickets Button */}
      <div className="flex justify-center items-center font-medium text-white border-4 rounded-3xl px-5 py-1 hover:bg-white hover:text-black transition duration-300 cursor-pointer">
        GET TICKETS
      </div>
    </header>
  );
};

export default Topbar;
