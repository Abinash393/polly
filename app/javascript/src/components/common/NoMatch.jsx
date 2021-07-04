import React from "react";
import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <div className="table w-full h-screen text-center">
      <div className="align-middle table-cell">
        <h1 className="text-gray-700 text-3xl">Not Found 404</h1>
        <Link to="/">
          <span className="text-green-700 text-xl">Dashboard</span>
        </Link>
      </div>
    </div>
  );
};

export default NoMatch;
