import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PollCard from "components/dashboard/PollCard";
import pollsApi from "apis/polls";
import Logger from "js-logger";

const ShowPolls = () => {
  const [polls, setPolls] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPollList();
  }, []);

  const fetchPollList = async () => {
    try {
      const res = await pollsApi.list();
      setPolls(res.data.polls);
      setLoading(false);
    } catch (err) {
      Logger.error(err);
    }
  };

  const handleDeletePoll = async id => {
    try {
      const res = await pollsApi.destroy(id);
      if (res.data.success) {
        setPolls(polls.filter(poll => poll.id != id));
      }
    } catch (err) {
      Logger.error(err);
    }
  };

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
                <PollCard
                  key={id}
                  id={id}
                  title={title}
                  handleDeletePoll={handleDeletePoll}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowPolls;
