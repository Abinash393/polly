import React from "react";

const Header = () => {
  return (
    <header className="bg-white rounded-sm w-full relative overflow-hidden shadow-xl p-1.5">
      <div className="flex justify-between mx-24">
        <span className="font-bold text-3xl text-gray-700">Polly</span>
        <div className="flex inline">
          <span className="font-semibold text-xl min-h-ful rounded-sm py-2 px-4 text-gray-700">
            Name
          </span>
          <span className="text-xl cursor-default p-1.5 text-gray-700">|</span>
          <button className="bg-white hover:bg-red-400 hover:text-white text-gray-700 font-semibold py-2 px-4 rounded shadow">
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
