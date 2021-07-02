import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = props => {
  const [firstName, setFirstName] = useState("");

  const handleSignupForm = event => {
    event.preventDefault();
    props.history.push("/signin");
  };

  return (
    <div className="container mx-auto">
      <div className="flex h-full">
        <div className="bg-white border mx-auto mt-16 md-8 w-1/2 px-2 py-4 rounded shadow-xl">
          <h2 className="text-center text-2xl text-blue-500 my-6 mx-min">
            Signup
          </h2>
          <form onSubmit={handleSignupForm} className="max-w-lg my-0 mx-auto">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  htmlFor="firstName"
                  className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  FIRST NAME
                </label>
                <input
                  required
                  type="text"
                  name="userName"
                  id="firstName"
                  placeholder="John"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  htmlFor="lastName"
                  className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  LAST NAME
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="doe"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  htmlFor="email"
                  className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="johndoe@email.com"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                PASSWORD
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="********"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
              <p className="text-gray-600 text-xs italic my-4">
                Include numbers and spacial character for a strong password
              </p>
            </div>
            <div>
              <label
                htmlFor="passwordConformation"
                className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                PASSWORD CONFORMATION
              </label>
              <input
                type="password"
                name="passwordConformation"
                id="passwordConformation"
                placeholder="********"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Signup
            </button>
            <div className="flex my-6 text-gray-700">
              <p className="italic">Already have an account?</p>
              <Link to="/login">
                <span className="cursor-pointer text-gray-700 hover:text-blue-500 ml-4">
                  Login
                </span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
