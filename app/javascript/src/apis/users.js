import axios from "axios";

const usersUrl = "/api/v1/users/";

const login = payload => axios.post(usersUrl + "login", payload);
const signup = payload => axios.post(usersUrl, payload);

const usersApi = {
  login,
  signup,
};

export default usersApi;
