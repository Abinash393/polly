import React from "react";
import { Link } from "react-router-dom";
import PollCard from "components/PollCard";

const ShowPolls = () => {
  const polls = [
    { id: "asdausds", title: "1 miles in km?" },
    { id: "qwsdsadd", title: "how many pixels in 1megapixel" },
  ];

  return (
    <div className="container mx-auto">
      <div className="flex h-full">
        <div className="bg-white border mx-auto mt-16 md-8 w-1/2 px-2 py-4 rounded shadow-xl">
          <div className="flex justify-between mb-2">
            <p className="text-blue-500 font-bold text-2xl">Polls</p>
            <Link to="/polls/new">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Create Poll +
              </button>
            </Link>
          </div>
          <div className="table w-full">
            <div className="table-row-group ">
              {polls.map(({ id, title }) => (
                <PollCard key={id} id={id} title={title} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowPolls;
