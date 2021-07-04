import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Toastr from "components/common/Toastr";
import usersApi from "apis/users";
import { setToLocalStorage } from "common/storage";

const Login = ({ setIsLoggedIn }) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginForm = async event => {
    try {
      event.preventDefault();
      const res = await usersApi.login({ user: { email, password } });
      if (res.data.success) {
        Toastr.success("Logged In");
        setToLocalStorage(res.data);
        setIsLoggedIn(true);
        history.push("/");
      }
    } catch (err) {
      logger.error(err);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="flex h-full">
        <div className="bg-white border mx-auto mt-16 md-8 w-1/2 px-2 py-4 rounded shadow-xl">
          <h2 className="text-center text-2xl text-blue-500 my-6 mx-min">
            login
          </h2>
          <form onSubmit={handleLoginForm} className="max-w-lg my-0 mx-auto">
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
                  placeholder="johndoe@email.com"
                  value={email}
                  onChange={e => {
                    setEmail(e.target.value);
                  }}
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
                placeholder="********"
                value={password}
                onChange={e => {
                  setPassword(e.target.value);
                }}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Login
            </button>
            <div className="flex my-6 text-gray-700">
              <p className="italic">Don&apos;t have an account?</p>
              <Link to="/signup">
                <span className="cursor-pointer text-gray-700 hover:text-blue-500 ml-4">
                  Signup
                </span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
