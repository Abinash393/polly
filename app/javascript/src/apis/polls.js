import axios from "axios";

const pollsUrl = "/api/v1/polls/";

const list = () => axios.get(pollsUrl);
const show = id => axios.get(pollsUrl + id);
const create = payload => axios.post(pollsUrl, payload);
const update = (id, payload) => axios.put(pollsUrl + id, payload);
const destroy = id => axios.delete(pollsUrl + id);
const vote = payload => axios.post(pollsUrl + "vote", payload);

const pollsApi = { list, show, create, update, destroy, vote };

export default pollsApi;
