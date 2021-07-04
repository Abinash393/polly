import React from "react";

const PollForm = ({
  handleSubmit,
  title,
  setTitle,
  option1,
  option2,
  option3,
  option4,
  setOption1,
  setOption2,
  setOption3,
  setOption4,
}) => {
  return (
    <form className="max-w-lg my-0 mx-auto" onSubmit={handleSubmit}>
      <div className="flex flex-wrap mb-6">
        <label
          htmlFor="title"
          className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          TITLE
        </label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Write a question"
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        />
      </div>
      <div className="flex flex-wrap mb-6">
        <label
          htmlFor="option1"
          className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          OPTION 1
        </label>
        <input
          type="text"
          name="option1"
          id="option1"
          placeholder="Option 1"
          value={option1}
          onChange={e => setOption1(e.target.value)}
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        />
      </div>
      <div className="flex flex-wrap mb-6">
        <label
          htmlFor="option2"
          className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          OPTION 2
        </label>
        <input
          type="text"
          name="option2"
          id="option2"
          placeholder="Option 2"
          value={option2}
          onChange={e => setOption2(e.target.value)}
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        />
      </div>
      <div className="flex flex-wrap mb-6">
        <label
          htmlFor="option3"
          className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          OPTION 3
        </label>
        <input
          type="text"
          name="option3"
          id="option3"
          placeholder="Option 3"
          value={option3}
          onChange={e => setOption3(e.target.value)}
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        />
      </div>
      <div className="flex flex-wrap mb-6">
        <label
          htmlFor="option4"
          className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          OPTION 4
        </label>
        <input
          type="text"
          name="option4"
          id="option4"
          placeholder="Option 4"
          value={option4}
          onChange={e => setOption4(e.target.value)}
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Update
      </button>
    </form>
  );
};

export default PollForm;
