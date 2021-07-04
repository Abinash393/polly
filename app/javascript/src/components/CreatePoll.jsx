import React, { useState } from "react";
import PollForm from "components/forms/Poll";
import pollsApi from "apis/polls";
import Toastr from "components/common/Toastr";

const CreatePoll = ({ history }) => {
  const [title, setTitle] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [loading, setLoading] = useState("");

  const handleSubmit = async event => {
    try {
      event.preventDefault();
      const res = await pollsApi.create({
        poll: { title, option1, option2, option3, option4 },
      });

      if (res.data.success) {
        Toastr.success(res.data.notice);
      } else {
        Toastr.error(res.data.notice);
      }
      history.push("/");
    } catch (err) {
      logger.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="flex h-full">
        <div className="bg-white border mx-auto mt-16 md-8 w-1/2 px-2 py-4 rounded shadow-xl">
          <h2 className="text-center text-2xl text-blue-500 my-6 mx-min">
            Create Poll
          </h2>
          <PollForm
            handleSubmit={handleSubmit}
            title={title}
            setTitle={setTitle}
            option1={option1}
            option2={option2}
            option3={option3}
            option4={option4}
            setOption1={setOption1}
            setOption2={setOption2}
            setOption3={setOption3}
            setOption4={setOption4}
          />
        </div>
      </div>
    </div>
  );
};

export default CreatePoll;
