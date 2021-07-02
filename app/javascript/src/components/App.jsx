import React from "react";
import Login from "components/Login";
import Header from "components/Header";
import Signup from "components/Signup";
import ShowPolls from "components/ShowPolls";
import CreatePoll from "components/CreatePoll";
import EditPoll from "components/EditPoll";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const handleLogout = () => {};

  return (
    <>
      <Router>
        <Header handleLogout={handleLogout} />
        <Switch>
          <Route path="/" exact>
            <ShowPolls />
          </Route>
          <Route path="/signup" exact>
            <Signup />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/polls/new" exact>
            <CreatePoll />
          </Route>
          <Route path="/polls/:id/edit">
            <EditPoll />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
