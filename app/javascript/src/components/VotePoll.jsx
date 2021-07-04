import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import pollsApi from "apis/polls";
import Logger from "js-logger";

const VotePoll = ({ history }) => {
  const { id } = useParams();
  const [poll, setPoll] = useState(null);
  const [option, setOption] = useState(1);
  const [pollResult, setPollResult] = useState(null);
  const optionClass =
    "cursor-pointer border-gray-600 my-6 mx-4 hover:text-green-700";

  const fetchPoll = async () => {
    try {
      const res = await pollsApi.show(id);
      if (res.data.success) {
        setPoll(res.data.poll);
      }
    } catch (err) {
      Logger.error(err);
    }
  };

  const handleVote = async () => {
    try {
      const res = await pollsApi.vote({ poll: { id, option } });
      if (res.data.success) {
        setPollResult(res.data.result);
      }
    } catch (err) {
      Logger.error(err);
    }
  };

  useEffect(() => {
    fetchPoll();
  }, []);

  return (
    poll && (
      <div className="container mx-auto">
        <div className="flex h-full">
          <div className="bg-white border mx-auto mt-16 md-8 w-1/2 px-2 py-4 rounded shadow-xl">
            <h2 className="text-left text-xl text-blue-700 mt-4 mx-min">
              {poll.title}
            </h2>
            <div className="p-4 my-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="">
                  <div
                    onClick={() => setOption(i)}
                    className={
                      option == i ? "text-red-500 " + optionClass : optionClass
                    }
                  >
                    {`${i}. ` + poll[`option${i}`]}
                  </div>
                  {pollResult && (
                    <>
                      <progress
                        id={1}
                        max="100"
                        value={pollResult[`option${i}Percent`]}
                      ></progress>
                      <span>
                        {"  " + pollResult[`option${i}Percent`] + "%"}
                      </span>
                    </>
                  )}
                </div>
              ))}
            </div>
            <span
              onClick={handleVote}
              className="mt-10 mx-w-25 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
            >
              Vote
            </span>
          </div>
        </div>
      </div>
    )
  );
};

export default VotePoll;
