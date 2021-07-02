import React from "react";

const CreatePoll = () => {
  return (
    <div className="container mx-auto">
      <div className="flex h-full">
        <div className="bg-white border mx-auto mt-16 md-8 w-1/2 px-2 py-4 rounded shadow-xl">
          <h2 className="text-center text-2xl text-blue-500 my-6 mx-min">
            Create Poll
          </h2>
          <form className="max-w-lg my-0 mx-auto">
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
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePoll;
