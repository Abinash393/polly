import React from "react";
import { Link } from "react-router-dom";
import { setToLocalStorage } from "common/storage";
import { either, isEmpty, isNil } from "ramda";

const firstName = localStorage.getItem("userFirstName");

const handleLogout = () => {
  localStorage.clear();
  window.location.href = "/";
};

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <header className="bg-white rounded-sm w-full relative overflow-hidden shadow-xl p-1.5">
      <div className="flex justify-between mx-24">
        <Link to="/">
          <span className="font-bold text-3xl text-gray-700">Polly</span>
        </Link>
        {firstName ? (
          <div className="flex inline">
            <span className="capitalize font-semibold text-xl min-h-ful rounded-sm py-2 px-4 text-gray-700">
              {firstName}
            </span>
            <span className="min-h-ful font-semibold text-xl cursor-default py-2 mx-2 text-gray-700">
              |
            </span>
            <span
              onClick={() => {
                handleLogout();
                setIsLoggedIn(false);
              }}
              className="font-semibold text-xl min-h-ful rounded-sm py-2 px-4 text-gray-700 hover:text-red-400 cursor-pointer"
            >
              Logout
            </span>
          </div>
        ) : (
          <div className="flex inline text-center justify-center">
            <Link to="/signup">
              <span className="font-semibold text-xl min-h-ful rounded-sm py-2 px-4 text-gray-700">
                Signup
              </span>
            </Link>
            <span>
              <span className="font-semibold text-xl min-h-ful rounded-sm py-2 px-4 text-gray-700">
                |
              </span>
            </span>
            <Link to="/login">
              <span className="font-semibold text-xl min-h-ful rounded-sm py-2 px-4 text-gray-700">
                Login
              </span>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
