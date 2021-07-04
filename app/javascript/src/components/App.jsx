import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { either, isEmpty, isNil } from "ramda";

import Header from "components/Header";
import { initializeLogger } from "common/logger";
import { ToastrComponent } from "components/common/Toastr";
import NoMatch from "components/common/NoMatch";
import Login from "components/authentication/Login";
import Signup from "components/authentication/Signup";
import ShowPolls from "components/dashboard/ShowPolls";
import CreatePoll from "components/CreatePoll";
import EditPoll from "components/EditPoll";
import VotePoll from "components/VotePoll";
import { setAuthHeaders } from "apis/axios";
import PageLoader from "components/PageLoader";

const App = () => {
  const authToken = localStorage.getItem("authToken");
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(
    !either(isNil, isEmpty)(authToken) && authToken !== "null"
  );

  useEffect(() => {
    /*eslint no-undef: "off"*/
    initializeLogger();
    setAuthHeaders(setLoading);
  }, []);

  if (loading) {
    return (
      <div className="h-screen">
        <PageLoader />
      </div>
    );
  }

  const PrivateRoutes = ({ isLoggedIn }) => {
    return (
      <>
        <Route exact path="/polls/new" component={CreatePoll} />
        <Route exact path="/polls/:id/edit" component={EditPoll} />
        <Route exact path="/polls/:id" component={VotePoll} />
        {/* <Route path="*" component={NoMatch} /> */}
      </>
    );
  };

  const PublicRoutes = ({ isLoggedIn }) => {
    return (
      <>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login">
          <Login setIsLoggedIn={setIsLoggedIn} />
        </Route>
      </>
    );
  };

  return (
    <>
      <Router>
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Switch>
          <Route exact path="/" component={ShowPolls} />
          {isLoggedIn ? (
            <PrivateRoutes isLoggedIn={isLoggedIn} />
          ) : (
            <PublicRoutes isLoggedIn={isLoggedIn} />
          )}
        </Switch>
      </Router>
    </>
  );
};

export default App;
