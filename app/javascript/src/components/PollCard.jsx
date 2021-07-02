import React from "react";
import { Link } from "react-router-dom";

const PollCard = ({ id, title }) => {
  const handleDeletePoll = () => {};

  return (
    <div className="flex justify-between p-2 max-w-md hover:shadow-md" key={id}>
      <Link to={`/polls/${id}`}>
        <p className="cursor-pointer hover:text-blue-500">{title}</p>
      </Link>
      <div className="flex justify-between w-1/5">
        <Link to={`/polls/${id}/edit`}>
          <i className="h-8	w-8 text-lg flex item-center justify-center ri-edit-2-fill p-1 rounded-full hover:bg-green-500 hover:text-white"></i>
        </Link>
        <i
          onClick={handleDeletePoll}
          className="h-8	w-8 text-lg flex item-center justify-center ri-delete-bin-2-fill p-1 rounded-full hover:bg-red-500 hover:text-white"
        ></i>
      </div>
    </div>
  );
};

export default PollCard;
